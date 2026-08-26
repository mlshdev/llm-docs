> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/providers/kubernetes/knative.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/providers/kubernetes/knative.md)

# Traefik & Knative

The Traefik Knative provider integrates with Knative Serving to provide advanced traffic management and routing capabilities for serverless applications.

[Knative](https://knative.dev) is a Kubernetes-based platform that enables serverless workloads with features like scale-to-zero,
automatic scaling, and revision management.

The provider watches Knative `Ingress` resources and automatically configures Traefik routing rules,
enabling seamless integration between Traefik's networking capabilities and Knative's serverless platform.

## Requirements

Traefik follows the [Kubernetes support policy](https://kubernetes.io/releases/version-skew-policy/#supported-versions),
and supports at least the latest three minor versions of Kubernetes.
General functionality cannot be guaranteed for older versions.

1. Install/update the Knative CRDs.

   ```bash
   kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.20.0/serving-crds.yaml
   ```

2. Install the Knative Serving core components.

   ```bash
   kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.20.0/serving-core.yaml
   ```

3. Update the config-network configuration to use the Traefik ingress class.

   ```bash
      kubectl patch configmap/config-network \
      -n knative-serving \
      --type merge \
      -p '{"data":{"ingress.class":"traefik.ingress.networking.knative.dev"}}'
   ```

4. Add a custom domain to your Knative configuration (Optional).

   ```bash
   kubectl patch configmap config-domain \
     -n knative-serving \
     --type='merge' \
     -p='{"data":{"example.com":""}}'
   ```

5. Install/update the Traefik [RBAC](https://raw.githubusercontent.com/traefik/traefik/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/dynamic-configuration/kubernetes-knative-rbac.yml).

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/traefik/traefik/v3.7/docs/content/reference/dynamic-configuration/kubernetes-knative-rbac.yml
   ```

## Configuration Example

As this provider is an experimental feature, it needs to be enabled in the experimental and in the provider sections of the configuration.
You can enable the Knative provider as detailed below:

**File (YAML)**

```yaml
experimental:
  knative: true

providers:
  knative: {}
```

**File (TOML)**

```toml
[experimental.knative]

[providers.knative]
```

**CLI**

```bash
--experimental.knative=true
--providers.knative=true
```

The Knative provider uses the Knative API to retrieve its routing configuration.
The provider then watches for incoming Knative events and derives the corresponding dynamic configuration from it.

## Configuration Options

| Field                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                          | Default | Required |
| :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-providers-providersThrottleDuration"></a>`providers.providersThrottleDuration`             | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.** | 2s      | No       |
| <a id="opt-providers-knative-endpoint"></a>providers.knative.endpoint                                 | Server endpoint URL.<br />More information [here](#endpoint).                                                                                                                                                                                                                                                                                                                        |         |          |
| <a id="opt-providers-knative-token"></a>providers.knative.token                                       | Bearer token used for the Kubernetes client configuration.                                                                                                                                                                                                                                                                                                                           |         |          |
| <a id="opt-providers-knative-certAuthFilePath"></a>providers.knative.certAuthFilePath                 | Path to the certificate authority file.<br />Used for the Kubernetes client configuration.                                                                                                                                                                                                                                                                                           |         |          |
| <a id="opt-providers-knative-namespaces"></a>providers.knative.namespaces                             | Array of namespaces to watch.<br />If left empty, watch all namespaces.                                                                                                                                                                                                                                                                                                              |         |          |
| <a id="opt-providers-knative-labelSelector"></a>providers.knative.labelSelector                       | Allow filtering Knative Ingress objects using label selectors.                                                                                                                                                                                                                                                                                                                       |         |          |
| <a id="opt-providers-knative-throttleDuration"></a>providers.knative.throttleDuration                 | Minimum amount of time to wait between two Kubernetes events before producing a new configuration.<br />This prevents a Kubernetes cluster that updates many times per second from continuously changing your Traefik configuration.<br />If empty, every event is caught.                                                                                                           | 0       |          |
| <a id="opt-providers-knative-privateEntrypoints"></a>providers.knative.privateEntrypoints             | Entrypoint names used to expose the Ingress privately. If empty local Ingresses are skipped.                                                                                                                                                                                                                                                                                         |         |          |
| <a id="opt-providers-knative-privateService"></a>providers.knative.privateService                     | Kubernetes service used to expose the networking controller privately.                                                                                                                                                                                                                                                                                                               |         |          |
| <a id="opt-providers-knative-privateService-desc"></a>providers.knative.privateService.desc           | Name of the private Kubernetes service.                                                                                                                                                                                                                                                                                                                                              |         |          |
| <a id="opt-providers-knative-privateService-namespace"></a>providers.knative.privateService.namespace | Namespace of the private Kubernetes service.                                                                                                                                                                                                                                                                                                                                         |         |          |
| <a id="opt-providers-knative-publicEntrypoints"></a>providers.knative.publicEntrypoints               | Entrypoint names used to expose the Ingress publicly. If empty an Ingress is exposed on all entrypoints.                                                                                                                                                                                                                                                                             |         |          |
| <a id="opt-providers-knative-publicService"></a>providers.knative.publicService                       | Kubernetes service used to expose the networking controller publicly.                                                                                                                                                                                                                                                                                                                |         |          |
| <a id="opt-providers-knative-publicService-desc"></a>providers.knative.publicService.desc             | Name of the public Kubernetes service.                                                                                                                                                                                                                                                                                                                                               |         |          |
| <a id="opt-providers-knative-publicService-namespace"></a>providers.knative.publicService.namespace   | Namespace of the public Kubernetes service.                                                                                                                                                                                                                                                                                                                                          |         |          |

### `endpoint`

The Kubernetes server endpoint URL.

When deployed into Kubernetes, Traefik reads the environment variables `KUBERNETES_SERVICE_HOST` and `KUBERNETES_SERVICE_PORT` or `KUBECONFIG` to construct the endpoint.

The access token is looked up in `/var/run/secrets/kubernetes.io/serviceaccount/token` and the SSL CA certificate in `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`.
Both are mounted automatically when deployed inside Kubernetes.

The endpoint may be specified to override the environment variable values inside a cluster.

When the environment variables are not found, Traefik tries to connect to the Knative API server with an external-cluster client.
In this case, the endpoint is required.
Specifically, it may be set to the URL used by `kubectl proxy` to connect to a Knative cluster using the granted authentication and authorization of the associated kubeconfig.

**File (YAML)**

```yaml
providers:
  knative:
    endpoint: "http://localhost:8080"
    # ...
```

**File (TOML)**

```toml
[providers.knative]
  endpoint = "http://localhost:8080"
  # ...
```

**CLI**

```bash
--providers.knative.endpoint=http://localhost:8080
```

## Routing Configuration

See the dedicated section in [routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/knative).
