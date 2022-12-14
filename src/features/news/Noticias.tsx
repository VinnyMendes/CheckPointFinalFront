import { useEffect, useState } from "react";

import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { Time, Title } from "./organiza";
import { CardNoticia } from "./CardNoticia";
import { Modal } from "./Modal";
import { Premium } from "./Premium";

import * as S from "./styled"

interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  description: string;
  date: number | string;
  premium: boolean;
  image: string;
  descriptionCurto?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const obterInformacoes = async () => {
    const resposta = await obterNoticias();

    const data = resposta.map((noticia) => {

      return {
        id: noticia.id,
        titulo: Title(noticia.titulo),
        description: noticia.description,
        date: `Faz ${Time(noticia.date)} minutos`,
        premium: noticia.premium,
        image: noticia.image,
        descriptionCurto: noticia.description.substring(0, 100),
      };
    });

    setNoticias(data);
  };

  useEffect(() => {
    obterInformacoes();
  }, []);

  return (
    <S.ContainerNoticias>
      <S.TituloNoticias>Noticias dos Simpsons</S.TituloNoticias>
      <S.ListaNoticias>
        {noticias.map((noticia) => (
          <CardNoticia
            key={noticia.id}
            image={noticia.image}
            titulo={noticia.titulo}
            date={noticia.date}
            descriptionCurto={noticia.descriptionCurto}
            setModal={() => setModal(noticia)}
          />
        ))}
        {modal ? (
          modal.premium ? (
            <Premium
              setModal={() => setModal(null)}
              close={Close}
              assinarImage={AssinarImage}
            />
          ) : (
            <Modal
              setModal={() => setModal(null)}
              close={Close}
              image={modal.image}
              titulo={modal.titulo}
              description={modal.description}
            />
          )
        ) : null}
      </S.ListaNoticias>
    </S.ContainerNoticias>
  );
};

export default Noticias;
