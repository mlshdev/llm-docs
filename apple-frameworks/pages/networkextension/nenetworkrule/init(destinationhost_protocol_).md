> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nenetworkrule/init(destinationhost:protocol:)](https://developer.apple.com/documentation/networkextension/nenetworkrule/init(destinationhost:protocol:))

# init(destinationHost:protocol:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Creates a rule that matches network traffic destined for a host within a specific DNS domain.

## Declaration

```swift
init(destinationHost hostEndpoint: NWHostEndpoint, protocol: NENetworkRule.Protocol)
```

## Parameters

- `hostEndpoint`: An endpoint instance that contains the port and hostname or domain that the rule matches. This endpoint must contain a hostname, not an address.
- `protocol`: The protocol that the rule matches.

<a id="Discussion"></a>

## Discussion

If the port string of `destinationHost` is `0` or is the empty string, then the rule matches traffic on any port destined for the given hostname or domain.

If the hostname string of `destinationHost` consists of a single label, then the rule matches traffic destined to the specific host with that single label as its name.

If the hostname string of `destinationHost` consists of two or more labels, then the rule matches traffic destined to hosts within the domain specified by the hostname string.

<a id="Examples"></a>

### Examples

The following example makes a rule that matches all TCP and UDP traffic to a host named `com` in Swift.

```swift
let endpoint = NWHostEndpoint(hostname: "com", port: "0")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .any)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"com"
                                                           port:@"0"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolAny];
```

The next example matches all TCP and UDP traffic to hosts in the `example.com` DNS domain, including all DNS queries for names in the `example.com` DNS domain.

```swift
let endpoint = NWHostEndpoint(hostname: "example.com", port: "0")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .any)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"example.com"
                                                           port:@"0"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolAny];
```

The next example makes a rule that matches all DNS queries and responses for hosts in the `example.com` domain.

```swift
let endpoint = NWHostEndpoint(hostname: "example.com", port: "53")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .any)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"example.com"
                                                           port:@"53"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolAny];
```

The last example makes a rule that matches all TCP port 443 traffic to hosts in the `example.com` domain.

```swift
let endpoint = NWHostEndpoint(hostname: "example.com", port: "443")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .TCP)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"example.com"
                                                           port:@"443"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolTCP];
```

## See Also

### Creating a network rule

- [init(destinationNetwork:prefix:protocol:)](init%28destinationnetwork_prefix_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific network.
- [init(remoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:)](init%28remotenetwork_remoteprefix_localnetwork_localprefix_protocol_direction_%29.md): Deprecated. Creates a rule that matches traffic by remote network, local network, protocol, and direction.

# initWithDestinationHost:protocol: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Creates a rule that matches network traffic destined for a host within a specific DNS domain.

## Declaration

```objectivec
- (instancetype) initWithDestinationHost:(NWHostEndpoint *) hostEndpoint protocol:(NENetworkRuleProtocol) protocol;
```

## Parameters

- `hostEndpoint`: An endpoint instance that contains the port and hostname or domain that the rule matches. This endpoint must contain a hostname, not an address.
- `protocol`: The protocol that the rule matches.

<a id="Discussion"></a>

## Discussion

If the port string of `destinationHost` is `0` or is the empty string, then the rule matches traffic on any port destined for the given hostname or domain.

If the hostname string of `destinationHost` consists of a single label, then the rule matches traffic destined to the specific host with that single label as its name.

If the hostname string of `destinationHost` consists of two or more labels, then the rule matches traffic destined to hosts within the domain specified by the hostname string.

<a id="Examples"></a>

### Examples

The following example makes a rule that matches all TCP and UDP traffic to a host named `com` in Swift.

```swift
let endpoint = NWHostEndpoint(hostname: "com", port: "0")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .any)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"com"
                                                           port:@"0"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolAny];
```

The next example matches all TCP and UDP traffic to hosts in the `example.com` DNS domain, including all DNS queries for names in the `example.com` DNS domain.

```swift
let endpoint = NWHostEndpoint(hostname: "example.com", port: "0")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .any)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"example.com"
                                                           port:@"0"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolAny];
```

The next example makes a rule that matches all DNS queries and responses for hosts in the `example.com` domain.

```swift
let endpoint = NWHostEndpoint(hostname: "example.com", port: "53")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .any)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"example.com"
                                                           port:@"53"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolAny];
```

The last example makes a rule that matches all TCP port 443 traffic to hosts in the `example.com` domain.

```swift
let endpoint = NWHostEndpoint(hostname: "example.com", port: "443")
let rule = NENetworkRule(destinationHost: endpoint, protocol: .TCP)
```

Here’s the same example in ObjectiveC.

```objc
NWHostEndpoint *endpoint = [NWHostEndpoint endpointWithHostname:@"example.com"
                                                           port:@"443"];

NENetworkRule *rule = [[NENetworkRule alloc] initWithDestinationHost:endpoint
                                                            protocol:NENetworkRuleProtocolTCP];
```

## See Also

### Creating a network rule

- [initWithDestinationNetwork:prefix:protocol:](init%28destinationnetwork_prefix_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific network.
- [initWithRemoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:](init%28remotenetwork_remoteprefix_localnetwork_localprefix_protocol_direction_%29.md): Deprecated. Creates a rule that matches traffic by remote network, local network, protocol, and direction.
