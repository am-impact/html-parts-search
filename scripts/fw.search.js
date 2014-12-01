$.fn.validateSearch = function( options )
{
    return this.each(function(index, el)
    {
        var defaults = {
            placeholderAttr : 'placeholder',
            minValueLength  : 3,
            messageTimeout  : 5000,
            errorMessage    : 'Voer 3 of meer karakters in',
            formErrorClass  : 'search__form--error',
            errorMessageClass : 'search__errormessage'
        },
        o = $.extend( defaults, options ),
        $el = $(el);
        inputField = $el.find('input[type=text]'),

        $el.append('<div class="' + o.errorMessageClass + '">' + o.errorMessage + '</div>');

        $el.on('submit', function(e)
        {
            var $this = $(this),
                inputValue = $.trim( $this.find('input[type=text]').val() ),
                inputValueLength = inputValue.length;

            if( inputValueLength < o.minValueLength || inputValue == inputField.attr( o.placeholderAttr ) )
            {
                $this.addClass( o.formErrorClass );

                setTimeout(function()
                {
                    $this.removeClass( o.formErrorClass );
                }, o.messageTimeout);

                e.preventDefault();
            }
        });
    });
};


$('.search__form').validateSearch();