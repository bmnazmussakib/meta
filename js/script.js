$(document).ready(function() {

    // const cd = new Date().getFullYear() + 1;
    $(function() {
        $('.countdown').countdown({
            year: 2022, // YYYY Format
            month: 4, // 1-12
            day: 3, // 1-31
            hour: 0, // 24 hour format 0-23
            minute: 0, // 0-59
            second: 0, // 0-59
            timezone: -6,
            labels: true

        });
        10
    });

    // $(function() {
    //     $('.countdown').countdown({
    //         year: 2022, // YYYY Format
    //         month: 4, // 1-12
    //         day: 3, // 1-31
    //         hour: 0, // 24 hour format 0-23
    //         minute: 0, // 0-59
    //         second: 0, // 0-59
    //         timezone: -6,
    //         labels: true
    //     });
    //     10
    // });


});