> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/kafka.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/kafka.md)

# Kafka credentials <a id="kafka-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Kafka](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kafka)
- [Kafka Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger)

> **Info**
> **Schema Registry**
>
> These credentials authenticate the Kafka brokers. To connect to an authenticated Confluent Schema Registry for Avro encoding and decoding, use the separate [Schema Registry credentials](https://docs.n8n.io/integrations/builtin/credentials/schemaregistry).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Client ID

## Related resources <a id="related-resources"></a>

Refer to [Kafka's documentation](https://kafka.apache.org/documentation/) for more information about using the service.

If you're new to Kafka, refer to the [Apache Kafka Quickstart](https://kafka.apache.org/quickstart) for initial setup.

Refer to [Encryption and Authentication using SSL](https://kafka.apache.org/documentation/#security_ssl) for working with SSL in Kafka.

## Using client ID <a id="using-client-id"></a>

To configure this credential, you'll need a running Kafka environment and:

- A **Client ID**
- A list of relevant **Brokers**
- Username/password authentication details if your Kafka environment uses authentication

To set it up:

1. Enter the `CLIENT-ID` of the client or consumer group in the **Client ID** field in your credential.
2. Enter a comma-separated list of relevant **Brokers** for the credential to use in the format `<broker-service-name>:<port>`. Use the name you gave the broker when you defined it in the `services` list. For example, `kafka-1:9092,kafka-2:9092` would add the brokers `kafka-1` and `kafka-2` on port `9092`.
3. If your Kafka environment doesn't use SSL, turn off the **SSL** toggle.
4. If you've enabled authentication using SASL in your Kafka environment, turn on the **Authentication** toggle. Then add:
   1. The **Username**
   2. The **Password**
   3. Select the broker's configured **SASL Mechanism**. Refer to [SASL configuration](https://kafka.apache.org/documentation/#security_sasl_config) for more information. Options include:
      - `Plain`
      - `scram-sha-256`
      - `scram-sha-512`
