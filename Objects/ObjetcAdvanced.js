function Produto(nome,preco,estoque, marca){

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        value: estoque,
        writable: true, //  permite alterar o valor ou não se for false
        configurable: true  // permite ou não alterar a propriedade
    });

    Object.defineProperties(this,{
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable:true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable:true
        },
    });

    Object.defineProperties(this,{
        marca:{
            enumerable: true,
            configurable:true,
            get: function(){
                return this._marca;
            },
            set: function(valor){
                marca = valor
            },
        }
    });
}

const produto01 = new Produto('Lampada',5,3);
console.log(produto01);
produto01.marca = 'Philips';
