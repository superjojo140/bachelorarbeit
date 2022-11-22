static function openAssignedMeeting(meetingId) {
    let C = CalendarController;
    let m = C.modal;

    m.setModalVisible(true);
    m.setModalTitle("Termindetails (Termin vergeben)");
    m.resetAllForms();

    const meeting = Meeting.getById(meetingId);
    m.setMeetingDetailData(meeting);
    m.enableDetailMeetingForm(false);

    m.showAssignButtons(false, false, true, false);

    m.setClientVisible(true);
    m.enableClientForm(false);
    m.setClientData(meeting.teilnehmer);

    m.enableFooterButtons(false, false, false, true);

    m.setInfoAlert('<i class="fas fa-info-circle"></i> Dieser Termin ist bereits an einen Kunden vergeben. Bearbeiten des Termins ist nur moeglich, nachdem die Kundendaten geloescht wurden.');
}