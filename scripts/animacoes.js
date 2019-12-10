$(document).ready(function(){
    $('[data-anima]').each(function(){
        let $this = $(this);
        $(window).on('scroll resize', function(){
            let top = $this[0].getBoundingClientRect().top;
            if(top - window.innerHeight > 0)
                return;

            let animacao = $this.data('anima');
            switch(animacao){
                case 'fade-in':
                    $this.addClass('fade-in-fwd');
                    break;
                case 'ease-out':
                    $this.addClass('slide-in-right');
                    break;
                case 'ease-in':
                    $this.addClass('slide-in-left');
                    break;
                case 'rotate':
                    $this.addClass('rotate-center');
                    break;
                case 'shadow':
                    $this.addClass('shadow-pop-tr');
                    break;
                case 'focus-in':
                    $this.addClass('text-focus-in');
                    break;
                case 'jello':
                    $this.addClass('jello-horizontal');
                    break;
                case 'bounce':
                    $this.addClass('bounce-top');
                    break;
                case 'slide-in':
                    $this.addClass('slide-in-blurred-bottom');
                    break;
                case 'tilt-in':
                    $this.addClass('tilt-in-fwd-tr');
                    break;
            }
        });
    });

    $(window).trigger('scroll');
});