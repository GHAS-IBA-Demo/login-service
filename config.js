// VULN: hardcoded secrets committed to source control (Secret Scanning practice)
module.exports = {
  jwtSecret: "login-svc-secret-key-456", // VULN: weak hardcoded JWT secret
  aws: {
    accessKeyId: "AKIAZFAKEKEYLAB12345",  // exactly 20 chars: AKIA + 16 alphanumeric
    secretAccessKey: "zF4k3S3cr3tK3yF0rLab1234567890abcdEFGH", // 40 chars, not the AWS doc example
  },
  db: { file: "./login.sqlite" },
  exposeStackTraces: true
};
