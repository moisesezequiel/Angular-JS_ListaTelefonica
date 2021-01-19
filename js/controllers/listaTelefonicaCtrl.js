angular.module("listaTelefonica",["ngMessages"])
            angular.module("listaTelefonica").controller("listaTelefonicaCrtl", function($scope){
                $scope.app="lista telefonica";

                $scope.adicionarContato = function(contato){
                    $scope.contatos.push(angular.copy(contato));
                    delete $scope.contato
                    $scope.formAdd.$setPristine();
                };
                $scope.apagarContatos = function(contatos){
                    $scope.contatos = contatos.filter(function (contato){
                        if(!contato.selecionado) return contato;
                    });
                };  

                $scope.isContatoSelecionado = function (contatos){
                    return contatos.some(function (contato){
                        return contato.selecionado;
                    });
                };

                $scope.ordenarPor = function (campo){
                    $scope.criterioDeOrdenacao = campo;
                    $scope.direcaoDaOrdenacao  = !$scope.direcaoDaOrdenacao;

                }
                
                $scope.contatos=[
                    {nome : "Moisés" , telefone :"9784125" ,data : new Date(),cor :"blue"},
                    {nome : "israel" , telefone :"8487555", data : new Date(),cor :"red"},
                    {nome : "Camila" , telefone :"2222222", data : new Date(),cor :"yellow"}
                ];

                $scope.operadoras=[
                    {nome : "tim", codigo:11, categoria :"Celular", preco :2 },
                    {nome : "Embratel", codigo:02, categoria :"Fixo",preco :1},
                    {nome : "GVT", codigo:622, categoria :"Fixo",preco:1},
                    {nome : "oi", codigo:33, categoria :"Celular",preco :2 },
                    {nome : "claro", codigo:98, categoria :"Celular",preco :5 }
                ];
               $scope.classe = "selecionado";

                        });