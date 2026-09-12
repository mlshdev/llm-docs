> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nenetworkrule/init(destinationnetwork:prefix:protocol:)](https://developer.apple.com/documentation/networkextension/nenetworkrule/init(destinationnetwork:prefix:protocol:))

# init(destinationNetwork:prefix:protocol:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Creates a rule that matches network traffic destined for a host within a specific network.

## Declaration

```swift
init(destinationNetwork networkEndpoint: NWHostEndpoint, prefix destinationPrefix: Int, protocol: NENetworkRule.Protocol)
```

## Parameters

- `networkEndpoint`: An endpoint instance that matches the port and address or network that the rule matches. This endpoint must contain an address, not a hostname.
- `destinationPrefix`: An integer that in combination with the address in the endpoint specifies the destination network that the rule matches.
- `protocol`: The protocol that the rule matches.

<a id="Discussion"></a>

## Discussion

If the port string of `networkEndpoint` is `0` or the empty string, the rule matches traffic on any port destined for the given address or network.

## See Also

### Creating a network rule

- [init(destinationHost:protocol:)](init%28destinationhost_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific DNS domain.
- [init(remoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:)](init%28remotenetwork_remoteprefix_localnetwork_localprefix_protocol_direction_%29.md): Deprecated. Creates a rule that matches traffic by remote network, local network, protocol, and direction.

# initWithDestinationNetwork:prefix:protocol: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Creates a rule that matches network traffic destined for a host within a specific network.

## Declaration

```objectivec
- (instancetype) initWithDestinationNetwork:(NWHostEndpoint *) networkEndpoint prefix:(NSUInteger) destinationPrefix protocol:(NENetworkRuleProtocol) protocol;
```

## Parameters

- `networkEndpoint`: An endpoint instance that matches the port and address or network that the rule matches. This endpoint must contain an address, not a hostname.
- `destinationPrefix`: An integer that in combination with the address in the endpoint specifies the destination network that the rule matches.
- `protocol`: The protocol that the rule matches.

<a id="Discussion"></a>

## Discussion

If the port string of `networkEndpoint` is `0` or the empty string, the rule matches traffic on any port destined for the given address or network.

## See Also

### Creating a network rule

- [initWithDestinationHost:protocol:](init%28destinationhost_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific DNS domain.
- [initWithRemoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:](init%28remotenetwork_remoteprefix_localnetwork_localprefix_protocol_direction_%29.md): Deprecated. Creates a rule that matches traffic by remote network, local network, protocol, and direction.
