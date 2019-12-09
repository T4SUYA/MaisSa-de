$(document).ready(function(){
    $('table').each(function(){
        let $this = $(this);
        let id = $this.data('tabela');
        if(id){
            $.getJSON('http://localhost:3000/tabelas/' + id, function(data){
                let classeThead = $this.data('classe-thead');
                let html = '<thead' + (classeThead ? ' class="' + classeThead + '"' : '') + '><tr>';
                for(let c in data.colunas){
                    html += '<td><strong>' + data.colunas[c] + '</strong></td>';
                }
                html += '</tr></thead>';
                html += '<tbody>';
                for(let i in data.linhas){
                    html += '<tr>';
                    for(let c in data.colunas){
                        html += '<td>' + data.linhas[i][c] + '</td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody>';
                $this.html(html);
            });
        }
    });
});