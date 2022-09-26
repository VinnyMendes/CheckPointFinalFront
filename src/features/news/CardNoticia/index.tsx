import * as S from ".././styled"


type CardNoticiaType = {
    image: string;
    titulo: string;
    date: number | string;
    descriptionCurto?: string;
    setModal: () => void;
}

export const CardNoticia = ({ image, titulo, date, descriptionCurto, setModal }: CardNoticiaType) => (
        <S.CardNoticia>
            <S.ImageCardNoticia src={image} />
            <S.TituloCardNoticia>{titulo}</S.TituloCardNoticia>
            <S.DateCardNoticia>{date}</S.DateCardNoticia>
            <S.DescriptionCardNoticia>
                {descriptionCurto}
            </S.DescriptionCardNoticia>
            <S.BotaoLeitura onClick={setModal}>Ver mais</S.BotaoLeitura>
        </S.CardNoticia>
)