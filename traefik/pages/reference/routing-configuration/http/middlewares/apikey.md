> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/http/middlewares/apikey.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/http/middlewares/apikey.md)

> **Traefik Hub Feature**
> This middleware is available exclusively in [Traefik Hub](https://traefik.io/traefik-hub/). Learn more about [Traefik Hub's advanced features](https://doc.traefik.io/traefik-hub/api-gateway/intro).
> The API Key authentication middleware allows you to secure an API by requiring a secret key, base64 encoded or not, to be given, via an HTTP header, a cookie or a query parameter.

***

## Configuration Example

**Middleware API Key**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-apikey
  namespace: apps
spec:
  plugin:
    apiKey:
      keySource:
        headerAuthScheme: Bearer
        header: Authorization
      secretNonBase64Encoded: true
      secretValues:
        - "urn:k8s:secret:apikey:secret"
        - "urn:k8s:secret:apikey:othersecret"
```

**Values Secret**

```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: apikey
  namespace: whoami
stringData:
  secret: $2y$05$D4SPFxzfWKcx1OXfVhRbvOTH/QB0Lm6AXTk8.NOmU4rPLX2t6UUuW # htpasswd -nbB "" foo | cut -c 2-
  othersecret: $2y$05$HbLL.g5dUqJippH0RuAGL.RaM9wNS2cT7hp6.vbv5okdCmVBSDzzK # htpasswd -nbB "" bar | cut -c 2-
```

## Configuration Options

| Field                                                                   | Description                                                                                                                                                                                                                                           | Default | Required |
| :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-keySource-header"></a>`keySource.header`                     | Defines the header name containing the secret sent by the client.<br /> Either `keySource.header` or `keySource.query` or `keySource.cookie` must be set.                                                                                             | ""      | No       |
| <a id="opt-keySource-headerAuthScheme"></a>`keySource.headerAuthScheme` | Defines the scheme when using `Authorization` as header name. <br /> Check out the `Authorization` header [documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#syntax).                                            | ""      | No       |
| <a id="opt-keySource-query"></a>`keySource.query`                       | Defines the query parameter name containing the secret sent by the client.<br /> Either `keySource.header` or `keySource.query` or `keySource.cookie` must be set.                                                                                    | ""      | No       |
| <a id="opt-keySource-cookie"></a>`keySource.cookie`                     | Defines the cookie name containing the secret sent by the client.<br /> Either `keySource.header` or `keySource.query` or `keySource.cookie` must be set.                                                                                             | ""      | No       |
| <a id="opt-secretNonBase64Encoded"></a>`secretNonBase64Encoded`         | Defines whether the secret sent by the client is base64 encoded.                                                                                                                                                                                      | false   | No       |
| <a id="opt-secretValues"></a>`secretValues`                             | Contain the hash of the API keys. <br /> Supported hashing algorithms are Bcrypt, SHA1 and MD5. <br /> The hash should be generated using `htpasswd`.<br />Can reference a Kubernetes Secret using the URN format: `urn:k8s:secret:[name]:[valueKey]` | \[]     | Yes      |
