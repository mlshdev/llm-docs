> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/install-configuration/providers/others/ecs.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/install-configuration/providers/others/ecs.md)

# Traefik & AWS ECS

## Configuration Example

You can enable the ECS provider with as detailed below:

**File (YAML)**

```yaml
providers:
  ecs: {}
```

**File (TOML)**

```toml
[providers.ecs]
```

**CLI**

```bash
--providers.ecs=true
```

## Configuration Options

| Field                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                          | Default                             | Required |
| :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- | :------- |
| <a id="opt-providers-providersThrottleDuration"></a>`providers.providersThrottleDuration` | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.** | 2s                                  | No       |
| <a id="opt-providers-ecs-autoDiscoverClusters"></a>`providers.ecs.autoDiscoverClusters`   | Search for services in cluster list. If set to `true` service discovery is enabled for all clusters.                                                                                                                                                                                                                                                                                 | false                               | No       |
| <a id="opt-providers-ecs-ecsAnywhere"></a>`providers.ecs.ecsAnywhere`                     | Enable ECS Anywhere support.                                                                                                                                                                                                                                                                                                                                                         | false                               | No       |
| <a id="opt-providers-ecs-clusters"></a>`providers.ecs.clusters`                           | Search for services in cluster list. This option is ignored if `autoDiscoverClusters` is set to `true`.                                                                                                                                                                                                                                                                              | `["default"]`                       | No       |
| <a id="opt-providers-ecs-exposedByDefault"></a>`providers.ecs.exposedByDefault`           | Expose ECS services by default through Traefik. If set to *false*, containers that do not have a `traefik.enable=true` label are ignored from the resulting routing configuration.<br>See [here](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview#restrict-the-scope-of-service-discovery) for additional information.                         | true                                | No       |
| <a id="opt-providers-ecs-constraints"></a>`providers.ecs.constraints`                     | Defines an expression that Traefik matches against the container labels to determine whether to create any route for that container. See [here](#constraints) for more information.                                                                                                                                                                                                  | `""`                                | No       |
| <a id="opt-providers-ecs-healthyTasksOnly"></a>`providers.ecs.healthyTasksOnly`           | Defines whether Traefik discovers only healthy tasks (`HEALTHY` healthStatus).                                                                                                                                                                                                                                                                                                       | false                               | No       |
| <a id="opt-providers-ecs-defaultRule"></a>`providers.ecs.defaultRule`                     | The Default Host rule for all services. See [here](#defaultrule) for more information.                                                                                                                                                                                                                                                                                               | ``"Host(`{{ normalize .Name }}`)"`` | No       |
| <a id="opt-providers-ecs-refreshSeconds"></a>`providers.ecs.refreshSeconds`               | Defines the polling interval (in seconds).                                                                                                                                                                                                                                                                                                                                           | 15                                  | No       |
| <a id="opt-providers-ecs-region"></a>`providers.ecs.region`                               | Defines the region of the ECS instance. See [here](#credentials) for more information.                                                                                                                                                                                                                                                                                               | ""                                  | No       |
| <a id="opt-providers-ecs-accessKeyID"></a>`providers.ecs.accessKeyID`                     | Defines the Access Key ID for the ECS instance. See [here](#credentials) for more information.                                                                                                                                                                                                                                                                                       | ""                                  | No       |
| <a id="opt-providers-ecs-secretAccessKey"></a>`providers.ecs.secretAccessKey`             | Defines the Secret Access Key for the ECS instance. See [here](#credentials) for more information.                                                                                                                                                                                                                                                                                   | ""                                  | No       |

### `constraints`

The `constraints` option can be set to an expression that Traefik matches against the container labels (task),
to determine whether to create any route for that container.
If none of the container labels match the expression, no route for that container is created.
If the expression is empty, all detected containers are included.

The expression syntax is based on the `Label("key", "value")`, and `LabelRegex("key", "value")` functions,
as well as the usual boolean logic, as shown in examples below.

> **Constraints key limitations**
> Note that `traefik.*` is a reserved label namespace for configuration and can not be used as a key for custom constraints.
> **Constraints Expression Examples**
>
> ```toml
> # Includes only containers having a label with key `a.label.name` and value `foo`
> constraints = "Label(`a.label.name`, `foo`)"
> ```
>
> ```toml
> # Excludes containers having any label with key `a.label.name` and value `foo`
> constraints = "!Label(`a.label.name`, `value`)"
> ```
>
> ```toml
> # With logical AND.
> constraints = "Label(`a.label.name`, `valueA`) && Label(`another.label.name`, `valueB`)"
> ```
>
> ```toml
> # With logical OR.
> constraints = "Label(`a.label.name`, `valueA`) || Label(`another.label.name`, `valueB`)"
> ```
>
> ```toml
> # With logical AND and OR, with precedence set by parentheses.
> constraints = "Label(`a.label.name`, `valueA`) && (Label(`another.label.name`, `valueB`) || Label(`yet.another.label.name`, `valueC`))"
> ```
>
> ```toml
> # Includes only containers having a label with key `a.label.name` and a value matching the `a.+` regular expression.
> constraints = "LabelRegex(`a.label.name`, `a.+`)"
> ```

**File (YAML)**

```yaml
providers:
  ecs:
    constraints: "Label(`a.label.name`,`foo`)"
    # ...
```

**File (TOML)**

```toml
[providers.ecs]
  constraints = "Label(`a.label.name`,`foo`)"
  # ...
```

**CLI**

```bash
--providers.ecs.constraints="Label(`a.label.name`,`foo`)"
# ...
```

For additional information, refer to [Restrict the Scope of Service Discovery](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview#exposedbydefault-and-traefikenable).

### `defaultRule`

The `defaultRule` option defines what routing rule to apply to a container if no rule is defined by a label.

It must be a valid [Go template](https://pkg.go.dev/text/template/), and can use
[sprig template functions](https://masterminds.github.io/sprig/).
The container service name can be accessed with the `Name` identifier,
and the template has access to all the labels defined on this container.

**File (YAML)**

```yaml
providers:
  ecs:
    defaultRule: "Host(`{{ .Name }}.{{ index .Labels \"customLabel\"}}`)"
    # ...
```

**File (TOML)**

```toml
[providers.ecs]
  defaultRule = "Host(`{{ .Name }}.{{ index .Labels \"customLabel\"}}`)"
  # ...
```

**CLI**

```bash
--providers.ecs.defaultRule='Host(`{{ .Name }}.{{ index .Labels "customLabel"}}`)'
# ...
```

> **Default rule and Traefik service**
> The exposure of the Traefik container, combined with the default rule mechanism,
> can lead to create a router targeting itself in a loop.
> In this case, to prevent an infinite loop,
> Traefik adds an internal middleware to refuse the request if it comes from the same router.

### Credentials

This defines the credentials for the ECS instance

If `region` is not provided, it is resolved from the EC2 metadata endpoint for EC2 tasks.
In a FARGATE context it is resolved from the `AWS_REGION` environment variable.

If `accessKeyID` and `secretAccessKey` are not provided, credentials are resolved in the following order:

- Using the environment variables `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`.
- Using shared credentials, determined by `AWS_PROFILE` and `AWS_SHARED_CREDENTIALS_FILE`, defaults to `default` and `~/.aws/credentials`.
- Using EC2 instance role or ECS task role

**File (YAML)**

```yaml
providers:
  ecs:
    region: us-east-1
    accessKeyID: "abc"
    secretAccessKey: "123"
    # ...
```

**File (TOML)**

```toml
[providers.ecs]
  region = "us-east-1"
  accessKeyID = "abc"
  secretAccessKey = "123"
```

**CLI**

```bash
--providers.ecs.region="us-east-1"
--providers.ecs.accessKeyID="abc"
--providers.ecs.secretAccessKey="123"
# ...
```

## Policy

Traefik needs the following policy to read ECS information:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "TraefikECSReadAccess",
            "Effect": "Allow",
            "Action": [
                "ecs:ListClusters",
                "ecs:DescribeClusters",
                "ecs:ListTasks",
                "ecs:DescribeTasks",
                "ecs:DescribeContainerInstances",
                "ecs:DescribeTaskDefinition",
                "ec2:DescribeInstances",
                "ssm:DescribeInstanceInformation"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

> **ECS Anywhere**
> Please note that the `ssm:DescribeInstanceInformation` action is required for ECS anywhere instances discovery.
