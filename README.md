# login-service

Standalone, intentionally vulnerable auth microservice.

## Vulns
- SQL Injection in `POST /login` (CodeQL)
- Hardcoded JWT secret + AWS credentials in `config.js` (Secret Scanning, CodeQL)
- Plaintext password storage (manual review)
- Verbose error disclosure (CodeQL / manual review)
- Outdated `jsonwebtoken` 8.5.1 (Dependabot)

## Run
```
npm install
npm start
```

## Testing notes
Confirmed SQL injection bypass works via `admin' --` payload (tested locally, curl).
