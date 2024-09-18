import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PollService from '../services/PollService';
import AnswerModal from './AnswerModal';

const SharedPoll = () => {
  const { pollId } = useParams();
  const [poll, setPoll] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await PollService.getPollById(pollId);
        setPoll(response.data.data);
        setShowModal(true);
      } catch (error) {
        console.error('Failed to fetch poll', error);
        navigate('/'); // Redirect to home if poll not found
      }
    };

    fetchPoll();
  }, [pollId, navigate]);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Redirect to home after closing the modal
  };

  return (
    <div>
      {poll && (
        <AnswerModal
          show={showModal}
          handleClose={handleCloseModal}
          poll={poll}
        />
      )}
    </div>
  );
};

export default SharedPoll;
