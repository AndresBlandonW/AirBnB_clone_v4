$(document).ready(function() {
    const dict = {};
    $('INPUT:checkbox').change(function() {
        const k = $(this).attr('data-id');
        const v = $(this).attr('data-name');
        if ((this).checked) {
            if (!dict[k]) {
                dict[k] = v;
            }
        } else if (!(this).checked) {
            delete dict[k];
        }
        $('.amenities h4').empty();
        const vals = Object.values(dict);
        const length = vals.length;
        vals.forEach((val, index) => {
            $('.amenities h4').append(val);
            if (index < length - 1) {
                $('.amenities h4').append(', ');
            }
        });
    });
});
