> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/load-balancing/serverstransport.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/load-balancing/serverstransport.md)

ServersTransport allows you to configure the transport between Traefik and your HTTP servers.

## Configuration Example

Declare the serversTransport:

**Structured (YAML)**

```yaml
http:
  serversTransports:
    mytransport:
      serverName: "myhost"
      certificates:
        - "/path/to/cert1.pem"
        - "/path/to/cert2.pem"
      insecureSkipVerify: true
      rootCAs:
        - "/path/to/rootca1.pem"
        - "/path/to/rootca2.pem"
      maxIdleConnsPerHost: 100
      disableHTTP2: true
      peerCertURI: "spiffe://example.org/peer"
      forwardingTimeouts:
        dialTimeout: "30s"
        responseHeaderTimeout: "10s"
        idleConnTimeout: "60s"
        readIdleTimeout: "5s"
        pingTimeout: "15s"
      spiffe:
        ids:
          - "spiffe://example.org/id1"
          - "spiffe://example.org/id2"
        trustDomain: "example.org"
      cipherSuites:
        - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
      minVersion: VersionTLS12
      maxVersion: VersionTLS12
```

**Structured (TOML)**

```toml
[http.serversTransports.mytransport]
  serverName = "myhost"
  certificates = ["/path/to/cert1.pem", "/path/to/cert2.pem"]
  insecureSkipVerify = true
  rootCAs = ["/path/to/rootca1.pem", "/path/to/rootca2.pem"]
  maxIdleConnsPerHost = 100
  disableHTTP2 = true
  peerCertURI = "spiffe://example.org/peer"
  cipherSuites = ["TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256","TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"]
  minVersion = "VersionTLS12"
  maxVersion = "VersionTLS12"

  [http.serversTransports.mytransport.forwardingTimeouts]
    dialTimeout = "30s"
    responseHeaderTimeout = "10s"
    idleConnTimeout = "60s"
    readIdleTimeout = "5s"
    pingTimeout = "15s"

  [http.serversTransports.mytransport.spiffe]
    ids = ["spiffe://example.org/id1", "spiffe://example.org/id2"]
    trustDomain = "example.org"
```

Attach the serversTransport to a service:

**Structured (YAML)**

```yaml
## Dynamic configuration
http:
  services:
    Service01:
      loadBalancer:
        serversTransport: mytransport
```

**Structured(TOML)**

```toml
## Dynamic configuration
[http.services]
  [http.services.Service01]
    [http.services.Service01.loadBalancer]
      serversTransport = "mytransport"
```

**Labels**

```yaml
labels:
  - "traefik.http.services.Service01.loadBalancer.serversTransport=mytransport"
```

**Tags**

```json
{
  // ...
  "Tags": [
    "traefik.http.services.Service01.loadBalancer.serversTransport=mytransport"
  ]
}
```

## Configuration Options

| Field                                                                                               | Description                                                                                                                              | Default | Required |
| :-------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-serverName"></a>`serverName`                                                             | Configures the server name that will be used as the SNI.                                                                                 | ""      | No       |
| <a id="opt-certificates"></a>`certificates`                                                         | Defines the list of certificates (as file paths, or data bytes) that will be set as client certificates for mTLS.                        | \[]     | No       |
| <a id="opt-insecureSkipVerify"></a>`insecureSkipVerify`                                             | Controls whether the server's certificate chain and host name is verified.                                                               | false   | No       |
| <a id="opt-rootCAs"></a>`rootCAs`                                                                   | Set of root certificate authorities to use when verifying server certificates. (for mTLS connections).                                   | \[]     | No       |
| <a id="opt-cipherSuites"></a>`cipherSuites`                                                         | Defines the cipher suites to use when contacting backend servers.                                                                        | \[]     | No       |
| <a id="opt-minVersion"></a>`minVersion`                                                             | Defines the minimum TLS version to use when contacting backend servers.                                                                  | ""      | No       |
| <a id="opt-maxVersion"></a>`maxVersion`                                                             | Defines the maximum TLS version to use when contacting backend servers.                                                                  | ""      | No       |
| <a id="opt-maxIdleConnsPerHost"></a>`maxIdleConnsPerHost`                                           | Maximum idle (keep-alive) connections to keep per-host. If zero, `DefaultMaxIdleConnsPerHost` (2) is used.                               | 0       | No       |
| <a id="opt-disableHTTP2"></a>`disableHTTP2`                                                         | Disables HTTP/2 for connections with servers.                                                                                            | false   | No       |
| <a id="opt-peerCertURI"></a>`peerCertURI`                                                           | Defines the URI used to match against SAN URIs during the server's certificate verification.                                             | ""      | No       |
| <a id="opt-forwardingTimeouts-dialTimeout"></a>`forwardingTimeouts.dialTimeout`                     | Amount of time to wait until a connection to a server can be established.<br />0 = no timeout                                            | 30s     | No       |
| <a id="opt-forwardingTimeouts-responseHeaderTimeout"></a>`forwardingTimeouts.responseHeaderTimeout` | Amount of time to wait for a server's response headers after fully writing the request (including its body, if any).<br />0 = no timeout | 0s      | No       |
| <a id="opt-forwardingTimeouts-idleConnTimeout"></a>`forwardingTimeouts.idleConnTimeout`             | Maximum amount of time an idle (keep-alive) connection will remain idle before closing itself.<br />0 = no timeout                       | 90s     | No       |
| <a id="opt-forwardingTimeouts-readIdleTimeout"></a>`forwardingTimeouts.readIdleTimeout`             | Defines the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.    | 0s      | No       |
| <a id="opt-forwardingTimeouts-pingTimeout"></a>`forwardingTimeouts.pingTimeout`                     | Defines the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.                              | 15s     | No       |
| <a id="opt-spiffe"></a>`spiffe`                                                                     | Defines the SPIFFE configuration. An empty `spiffe` section enables SPIFFE (that allows any SPIFFE ID).                                  |         | No       |
| <a id="opt-spiffe-ids"></a>`spiffe.ids`                                                             | Defines the allowed SPIFFE IDs.<br />This takes precedence over the SPIFFE TrustDomain.                                                  | \[]     | No       |
| <a id="opt-spiffe-trustDomain"></a>`spiffe.trustDomain`                                             | Defines the SPIFFE trust domain.                                                                                                         | ""      | No       |
