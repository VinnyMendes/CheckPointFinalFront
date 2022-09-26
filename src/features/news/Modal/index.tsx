import * as S from ".././styled"


type ModalType = {
    setModal: () => void;
    close: string;
    image: string;
    titulo: string;
    description: string;
}

export const Modal = ({setModal, close, image, titulo, description}: ModalType) => (
        <S.ContainerModal>
            <S.CardModal>
                <S.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </S.CloseButton>
                <S.ImageModal src={image} alt="news-image" />
                <S.ContainerTexto>
                    <S.TituloModal>{titulo}</S.TituloModal>
                    <S.DescriptionModal>{description}</S.DescriptionModal>
                </S.ContainerTexto>
            </S.CardModal>
        </S.ContainerModal>
)