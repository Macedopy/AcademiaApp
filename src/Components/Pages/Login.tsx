import './styles/login.css'; // Corrigido para refletir a estrutura do diretório


export default function Login() {
    return (

        <div className="background">
        <div className="container">
            <div className="header">
                <h1>BODYCODE</h1>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username ou CPF</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <input type="submit" value="Entrar" />
                </div>
            </form>
            <div className="register">
                <p>Ainda não tem uma conta? <a href="http://localhost:3000/Cadastro">Cadastre-se</a></p>
            </div>
        </div>
    </div>
    )

}