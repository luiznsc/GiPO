import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Etiquetas.css';

const schema = yup.object({
    nome : yup.string()
              .required("O nome é obrigatório"),
    email : yup.string()
               .email("Digite um email válido!")
               .required("O e-mail é obrigatório"),
    cpf : yup.string().min(11,"O CPF deve ter pelo menos 11 dígitos!")
             .required("O CPF é obrigatório"),
    cep : yup.string().min(9,"O CEF deve ter pelo menos 9 dígitos!")
             .required("O CPF é obrigatório"),
    senha: yup.string().required('A senha é obrigatória')
             .min(8, 'A senha deve ter pelo menos 8 caracteres'),
    confirmaSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não coincidem')
             .required('Confirme sua senha')
}).required();

export default function EtiquetasHookForm(){
    const {register, handleSubmit, formState: { errors }, setValue, setFocus} = useForm({ resolver : yupResolver(schema)})

    const [usuario, setUsuario] = useState({'nome':'', 'email':'','cpf':''})
    const [listaUsuario, setlistaUsuario] = useState([])

    function inserirUsuario(usuario) {
        setUsuario({
          email: usuario.email,
          senha: usuario.senha
        });
      }

    function inserirUsuario(cliente){
        setlistaUsuario([...listaUsuario, {...cliente, senha: cliente.senha}])
    }

    function buscarCep(e){
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data =>{
            setValue('rua', data.logradouro)
            setValue('bairro',data.bairro)
            setValue('cidade',data.localidade)
            setValue('estado',data.uf)
            setFocus('numero')
        })
    }
    return(
        <>
            <div className='formulario'>
            <form onSubmit={handleSubmit(inserirUsuario)}>

            <h2>CRIE SUA CONTA GiPO</h2>

                <fielset className="dadospessoais">
                    <legend>Dados Pessoais</legend>
                    <label>Nome: <br/>
                        <input type="text" {...register('nome')}/>
                        <span>{errors.nome?.message}</span>
                    </label>
                    <br/>
                    <label>E-Mail:<br/>
                        <input type="text" {...register('email')} />
                        <span>{errors.email?.message}</span>
                    </label>
                    <br/>
                    <label>CPF:<br/>
                        <input type="text" {...register('cpf')} />
                        <span>{errors.cpf?.message}</span>
                    </label>
                    <br/>

                    <label>Senha:<br/>
                        <input type="password" {...register("senha")} />
                        <span>{errors.senha?.message}</span>
                    </label>
                    <br/>
                    <label>Confirme a senha:<br/>
                        <input type="password" {...register("confirmaSenha")} />
                        <span>{errors.confirmaSenha?.message}</span>
                    </label>
                    <br/>




                    <br/>
                </fielset>

                <fieldset className='endereco'>
                    <legend>Endereço</legend>
                    <label>CEP:<br/>
                        <input type="text" {...register("cep")} onBlur={buscarCep}/>
                        <span>{errors.cep?.message}</span>
                    </label>
                    <br/>
                    <label>Rua:<br/>
                        <input type="text" {...register("rua")}/>
                    </label>
                    <br/>
                    <label>Número:<br/>
                        <input type="text" {...register("numero")}/>
                    </label>
                    <br/>
                    <label>Bairro:<br/>
                        <input type="text" {...register("bairro")}/>
                    </label>
                    <br/>
                    <label>Cidade:<br/>
                        <input type="text" {...register("cidade")}/>
                    </label>
                    <br/>
                    <label>Estado:<br/>
                        <input type="text" {...register("estado")}/>
                    </label>
                </fieldset>

                <button type="submit">CRIAR</button>
            
            </form>
            </div>
        </>
    )
}