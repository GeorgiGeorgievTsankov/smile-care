$(document).ready(function() {
    // Форма за запазване на час
    $('#appointment-form').on('submit', function(e) {
        e.preventDefault();
        
        // Валидация
        let isValid = true;
        $('.form-control').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (isValid) {
            // AJAX заявка
            $.ajax({
                type: 'POST',
                url: 'process-appointment.php',
                data: $(this).serialize(),
                success: function(response) {
                    $('#success-message').removeClass('d-none');
                    $('#appointment-form')[0].reset();
                },
                error: function() {
                    $('#error-message').removeClass('d-none');
                }
            });
        }
    });
}); 