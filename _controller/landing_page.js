$(function() {

    if ($(location).attr('hash').length < 1 || $(location).attr('hash') == null) {
        show_dashboard();
    } else if ($(location).attr('hash') == '#/booking') {
        show_booking();
    } else if ($(location).attr('hash') == '#/dashboard') {
        show_dashboard();
    } else if ($(location).attr('hash') == '#/manage-booking') {
        show_mgr_booking();
    } else if ($(location).attr('hash') == '#/calendar') {
        show_calendar();
    } else if ($(location).attr('hash') == '#/manage-booking') {
        show_manage_booking();
    } else {
        show_dashboard();
    }

});

$(function() {
    $('a').click(function() {
        updateLinkActive(this.href);
        if (this.hash == '#/booking') {
            show_booking();
        } else if (this.hash == '#/dashboard') {
            show_dashboard();
        } else if (this.hash == '#/manage-booking') {
            show_mgr_booking();
        } else if (this.hash == '#') {
            show_dashboard();
        }
    });

});