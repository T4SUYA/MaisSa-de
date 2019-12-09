$(document).ready(function(){
    $('form[method="post"]').submit(function(e){
        e.preventDefault();
        e.stopImmediatePropagation();

        let $this = $(this);

        $.ajax({
            url: "http://localhost:3000/contatos",
            method: 'POST',
            data: $this.serializeObject(),
            success: function(){
                $this.find('button[type="submit"]').text('Solicitação realizada com sucesso!').attr('disabled', 'disabled');
            }
        });
    });
});