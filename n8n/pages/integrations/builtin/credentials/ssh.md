> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/ssh.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/ssh.md)

# SSH credentials <a id="ssh-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [SSH](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ssh)

## Prerequisites <a id="prerequisites"></a>

- Create a remote server with SSH enabled.
- Create a user account that can `ssh` into the server using one of the following:
  - Their own [password](#using-password)
  - An SSH [private key](#using-private-key)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- [Password](#using-password): Use this method if you have a user account that can `ssh` into the server using their own password.
- [Private key](#using-private-key): Use this method if you have a user account that uses an SSH key for the server or service.

## Related resources <a id="related-resources"></a>

Secure Shell (SSH) protocol is a method for securely sending commands over a network. Refer to [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for an example of SSH setup.

## Using password <a id="using-password"></a>

Use this method if you have a user account that can `ssh` into the server using their own password.

To configure this credential, you'll need to:

1. Enter the IP address of the server you're connecting to as the **Host**.
2. Enter the **Port** to use for the connection. SSH uses port `22` by default.
3. Enter the **Username** for a user account with `ssh` access on the server.
4. Enter the **Password** for that user account.

## Using private key <a id="using-private-key"></a>

Use this method if you have a user account that uses an SSH key for the server or service.

To configure this credential, you'll need to:

1. Enter the IP address of the server you're connecting to as the **Host**.
2. Enter the **Port** to use for the connection. SSH uses port `22` by default.
3. Enter the **Username** of the account that generated the private key.
4. Enter the entire contents of your SSH **Private Key**.
5. If you created a **Passphrase** for the **Private Key**, enter the passphrase.
   - If you didn't create a passphrase for the key, leave blank.
