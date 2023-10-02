import { useState } from 'react'
import Button from '../Button'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [bando, setBando] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            bando,
            imagem,
            time
        })
        setNome('')
        setBando('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Adicione seu personagem favorito Pirata / Marinheiro</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Bando"
                    placeholder="Digite seu bando" 
                    valor={bando}
                    aoAlterado={valor => setBando(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>
                    Criar Personagem
                </Button>
            </form>
        </section>
    )
}

export default Form