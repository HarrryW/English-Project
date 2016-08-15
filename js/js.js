
    function relocation(){
            window.location.href="secondPage.html"
        }
        function relocationTwo(){
            window.location.href="thirdPage.html"
        }
        $(document).ready(function(){
            $("button").click(function(){
                $('h1').html("......");
                $('button').css('curser', 'wait');
                setTimeout(relocation, 2000);
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
