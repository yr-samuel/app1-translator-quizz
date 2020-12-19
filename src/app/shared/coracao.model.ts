export class Coracao {
    constructor(public cheio: boolean, 
                public urlCCheio: string = '../../assets/coracao_cheio.png',
                public urlCVazio: string = '../../assets/coracao_vazio.png'){

                }

    public exibeCoracao(): string{
         if(this.cheio){
             return this.urlCCheio;
         }else{
             return this.urlCVazio;
         }
    }
}