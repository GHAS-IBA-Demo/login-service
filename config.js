// VULN: hardcoded secrets committed to source control (Secret Scanning practice)
module.exports = {
  jwtSecret: "login-svc-secret-key-456",
  aws: {
    accessKeyId: "AKIAZFAKEKEYLAB12345",
    secretAccessKey: "zF4k3S3cr3tK3yF0rLab1234567890abcdEFGH",
  },
  githubToken: "ghp_16C7e42F292c6912E7710c838347Ae178B4a",
  db: { file: "./login.sqlite" },
  exposeStackTraces: true
};
