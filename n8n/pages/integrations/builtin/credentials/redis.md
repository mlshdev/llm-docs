> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/redis.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/redis.md)

# Redis credentials <a id="redis-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Redis](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.redis)
- [Redis Chat Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat)
- [Redis Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Database connection

## Related resources <a id="related-resources"></a>

Refer to [Redis's developer documentation](https://redis.readthedocs.io/en/stable/index.html) for more information about the service.

## Using database connection <a id="using-database-connection"></a>

You'll need a user account on a [Redis](https://redis.io/) server and:

- A **Password**
- The **Host** name
- The **Port** number
- A **Database Number**
- **SSL**

To configure this credential:

1. Enter your user account **Password**.
2. Enter the **Host** name of the Redis server. The default is `localhost`.
3. Enter the **Port** number the connection should use. The default is `6379`.
   - This number should match the `tcp_port` listed when you run the `INFO` command.
4. Enter the **Database Number**. The default is `0`.
5. If the connection should use SSL, turn on the **SSL** toggle. If this toggle is off, the connection uses TCP only.
6. If you enable **SSL**, you have the option to **disable TLS verification**. Toggle to use self-signed certificates. WARNING: This makes the connection less secure.

Refer to [Connecting to Redis | Generic client](https://redis.readthedocs.io/en/stable/connections.html) for more information.
