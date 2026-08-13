// VULN: hardcoded secrets committed to source control (Secret Scanning practice)
module.exports = {
  jwtSecret: "login-svc-secret-key-456", // VULN: weak hardcoded JWT secret
  aws: {
    accessKeyId: "AKIAZ3XFAKEKEYFORLAB01",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
  },
  db: { file: "./login.sqlite" },
  exposeStackTraces: true
};
