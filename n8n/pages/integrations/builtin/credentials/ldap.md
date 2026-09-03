> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/ldap.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/ldap.md)

# LDAP credentials <a id="ldap-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [LDAP](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ldap)

## Prerequisites <a id="prerequisites"></a>

Create a server directory using Lightweight Directory Access Protocol (LDAP).

Some common LDAP providers include:

- [Jumpcloud](https://jumpcloud.com/blog/how-to-connect-your-application-to-ldap)
- [Azure ADDS](https://learn.microsoft.com/en-us/azure/active-directory-domain-services/tutorial-configure-ldaps)
- [Okta](https://help.okta.com/en-us/Content/Topics/Directory/LDAP-interface-connection-settings.htm)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- LDAP server details

## Related resources <a id="related-resources"></a>

Refer to your LDAP provider's own documentation for detailed information.

For general LDAP information, refer to [Basic LDAP concepts](https://ldap.com/basic-ldap-concepts/) for a basic overview and [The LDAP Bind Operation](https://ldap.com/the-ldap-bind-operation/) for information on how the bind operation and authentication work.

## Using LDAP server details <a id="using-ldap-server-details"></a>

To configure this credential, you'll need:

- The **LDAP Server Address**: Use the IP address or domain of your LDAP server.
- The **LDAP Server Port**: Use the number of the port used to connect to the LDAP server.
- The **Binding DN**: Use the Binding Distinguished Name (Bind DN) for your LDAP server. This is the user account the credential should log in as. If you're using Active Directory, this may look something like `cn=administrator, cn=Users, dc=n8n, dc=io`. Refer to your LDAP provider's documentation for more information on identifying this DN and the related password.
- The **Binding Password**: Use the password for the **Binding DN** user.
- Select the **Connection Security**: Options include:
  - `None`
  - `TLS`
  - `STARTTLS`
- *Optional:* Enter a numeric value in seconds to set a **Connection Timeout**.
