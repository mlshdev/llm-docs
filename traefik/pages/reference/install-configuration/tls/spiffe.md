> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/tls/spiffe.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/tls/spiffe.md)

# SPIFFE

Secure the backend connection with SPIFFE.

[SPIFFE](https://spiffe.io/docs/latest/spiffe-about/overview/) (Secure Production Identity Framework For Everyone),
provides a secure identity in the form of a specially crafted X.509 certificate,
to every workload in an environment.

Traefik is able to connect to the Workload API to obtain an X509-SVID used to secure the connection with SPIFFE enabled backends.

> **SPIFFE can cause Traefik to stall**
> When using SPIFFE,
> Traefik will wait for the first SVID to be delivered before starting.
> If Traefik is hanging when waiting on SPIFFE SVID delivery,
> please double check that it is correctly registered as workload in your SPIFFE infrastructure.

## Workload API

To enable SPIFFE globally, you need to set up the [static configuration](https://doc.traefik.io/traefik/v3.7/getting-started/configuration-overview#the-static-configuration). The `workloadAPIAddr` option specifies the address of the SPIFFE [Workload API](https://spiffe.io/docs/latest/spiffe-about/spiffe-concepts/#spiffe-workload-api).

**File (YAML)**

```yaml
## Static configuration.
spiffe:
    workloadAPIAddr: localhost
```

**File (TOML)**

```toml
## Static configuration
[spiffe]
    workloadAPIAddr = "localhost"
```

**CLI**

```bash
## Static configuration.
--spiffe.workloadAPIAddr=localhost
```

## ServersTransport

Enabling SPIFFE does not imply that backend connections are going to use it automatically.
Each [ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport) or [TCPServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport), that is meant to be secured with SPIFFE, must explicitly enable it (see [SPIFFE with ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport#opt-spiffe) or [SPIFFE with TCPServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport#opt-serverstransport-spiffe)).

### Configuration Example

**File (YAML)**

```yaml
serversTransport:
  spiffe:
    ids:
    - spiffe://trust-domain/id1
    - spiffe://trust-domain/id2
    trustDomain: "spiffe://trust-domain"
```

**File (TOML)**

```toml
[serversTransport.spiffe]
ids = [ "spiffe://trust-domain/id1", "spiffe://trust-domain/id2" ]
trustDomain = "spiffe://trust-domain"
```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: ServersTransportTCP
metadata:
  name: mytransport
  namespace: default

spec:
    spiffe:
      ids:
        - spiffe://trust-domain/id1
        - spiffe://trust-domain/id2
```
