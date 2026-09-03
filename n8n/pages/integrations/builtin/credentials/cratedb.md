> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/cratedb.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/cratedb.md)

# CrateDB credentials <a id="cratedb-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [CrateDB](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cratedb)

## Prerequisites <a id="prerequisites"></a>

An available instance of CrateDB.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- account connection

## Related resources <a id="related-resources"></a>

Refer to [CrateDB's documentation](https://cratedb.com/docs/crate/reference/en/latest/) for more information about the service.

## Using account connection <a id="using-account-connection"></a>

To configure this credential, you'll need:

- Your **Host** name
- Your **Database** name
- A **User** name
- A user **Password**
- To set the **SSL** parameter. Refer to the [CrateDB Secured Communications (SSL/TLS) documentation](https://cratedb.com/docs/crate/reference/en/5.7/admin/ssl.html#admin-ssl) for more information. The options n8n supports are:
  - Allow
  - Disable
  - Require
- A **Port** number

Refer to the [Connect to a CrateDB cluster documentation](https://cratedb.com/docs/crate/clients-tools/en/latest/connect/) for detailed instructions on these fields and their default values.
