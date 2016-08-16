
    function relocation(){
            window.location.href="secondPage.html"
        }
        function relocationTwo(){
            window.location.href="thirdPage.html"
        }

        $(document).ready(function(){
            $("#dank").click(function(){
                $('h1').html("......");
                $('html').css('cursor', 'wait');
                $('body').css('cursor', 'wait');
                $('button').css('cursor', 'wait');
                $('#memes').css('cursor', 'wait');
                setTimeout(relocation, 5000);

            });
         $('#memes').submit(function(){
                return false;
            });
            
            $('#memes').pStrength({
                'changeBackground'          : false,
                'onPasswordStrengthChanged' : function(passwordStrength, strengthPercentage) {
                    if ($(this).val()) {
                        $.fn.pStrength('changeBackground', this, passwordStrength);
                    } else {
                        $.fn.pStrength('resetStyle', this);
                    }
                    $('#' + $(this).data('display')).html('Your password strength is ' + strengthPercentage + '%');
                },
                'onValidatePassword': function(strengthPercentage) {
                    $('#' + $(this).data('display')).html(
                        $('#' + $(this).data('display')).html() + ' Strong!'
                    );
                    
                    $('#myForm').submit(function(){
                        return true;
                    });
                }
            });
        });
