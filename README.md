# simple-notifications

## Backend

Endpoints funcionais para criar e listar notificações (POST /notifications e GET /notifications).

Integração com RabbitMQ planejada, mas não consegui conectar devido a problemas de autenticação/permissões, porém a estrutura está preparada para publicação e consumo de mensagens.

## Frontend

Componente Angular standalone mockado, simulando notificações com status “Sucesso” ou “Erro”.

Permite inserir novas mensagens e visualizar a lista dinâmica de notificações.

## Como executar:

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

### Endpoints:
Backend: http://localhost:4000

Frontend: http://localhost:4200

