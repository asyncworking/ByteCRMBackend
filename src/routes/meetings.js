const express = require('express');

const { 
	addMeeting,
	getAllMeetings,
  getMeetings,
  getTodayMeetingsByUserId,
	updateMeeting,
	deleteMeeting,
	updateContacts,
	removeContacts
} = require('../controllers/meetings');

const router = express.Router();


router.post('/', addMeeting);
router.get('/', getAllMeetings);
router.get('/:id',getMeetings);
router.get('/user/:id',getTodayMeetingsByUserId);
router.put('/:id',updateMeeting);
router.delete('/:id',deleteMeeting);
router.put('/:meetingId/contacts/:contactId', updateContacts);
router.delete('/:meetingId/contacts/:contactId', removeContacts);

module.exports = router;
