import './styles/register.css'; // Corrigido para refletir a estrutura do diretório

export default function Login() {
    return (

        <body>
    <div className="background">
        <div className="container">
            <div className="header">
                <h1>BODYCODE</h1>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Username ou e-mail</label>
                    <input type="email" id="email" name="email" value="ola@dominio.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Data de nascimento</label>
                    <input type="date" id="dob" name="dob" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirmar senha</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <div className="form-group">
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    </div>
</body>
    )
}