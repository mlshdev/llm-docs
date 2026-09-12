> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nenetworkrule/init(remotenetwork:remoteprefix:localnetwork:localprefix:protocol:direction:)](https://developer.apple.com/documentation/networkextension/nenetworkrule/init(remotenetwork:remoteprefix:localnetwork:localprefix:protocol:direction:))

# init(remoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Creates a rule that matches traffic by remote network, local network, protocol, and direction.

## Declaration

```swift
init(remoteNetwork: NWHostEndpoint?, remotePrefix: Int, localNetwork: NWHostEndpoint?, localPrefix: Int, protocol: NENetworkRule.Protocol, direction: NETrafficDirection)
```

## Parameters

- `remoteNetwork`: An endpoint instance that contains the remote port and the remote address or network that the rule matches. This endpoint must contain an address, not a hostname.
- `remotePrefix`: An integer that in combination with the address in `remoteNetwork` specifies the remote network that the rule matches.
- `localNetwork`: An endpoint instance that contains the local port and the local address or network that the rule matches. This endpoint must contain an address, not a hostname.
- `localPrefix`: An integer that in combination with the address in localNetwork specifies the local network that the rule matches. The rule ignores this parameter if `localNetwork` is `nil`.
- `protocol`: The protocol that the rule matches.
- `direction`: The direction of network traffic that the rule matches.

<a id="Discussion"></a>

## Discussion

If the port string of `remoteNetwork` is `0` or the empty string, then the rule matches traffic on any port coming from the remote network. If `remoteNetwork` is `nil`, the rule matches any remote network.

If the port string of `localNetwork` is `0` or the empty string, then the rule matches traffic on any port coming from the local network. If `localNetwork` is `nil`, the rule matches any local network.

## See Also

### Creating a network rule

- [init(destinationNetwork:prefix:protocol:)](init%28destinationnetwork_prefix_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific network.
- [init(destinationHost:protocol:)](init%28destinationhost_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific DNS domain.

# initWithRemoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Creates a rule that matches traffic by remote network, local network, protocol, and direction.

## Declaration

```objectivec
- (instancetype) initWithRemoteNetwork:(NWHostEndpoint *) remoteNetwork remotePrefix:(NSUInteger) remotePrefix localNetwork:(NWHostEndpoint *) localNetwork localPrefix:(NSUInteger) localPrefix protocol:(NENetworkRuleProtocol) protocol direction:(NETrafficDirection) direction;
```

## Parameters

- `remoteNetwork`: An endpoint instance that contains the remote port and the remote address or network that the rule matches. This endpoint must contain an address, not a hostname.
- `remotePrefix`: An integer that in combination with the address in `remoteNetwork` specifies the remote network that the rule matches.
- `localNetwork`: An endpoint instance that contains the local port and the local address or network that the rule matches. This endpoint must contain an address, not a hostname.
- `localPrefix`: An integer that in combination with the address in localNetwork specifies the local network that the rule matches. The rule ignores this parameter if `localNetwork` is `nil`.
- `protocol`: The protocol that the rule matches.
- `direction`: The direction of network traffic that the rule matches.

<a id="Discussion"></a>

## Discussion

If the port string of `remoteNetwork` is `0` or the empty string, then the rule matches traffic on any port coming from the remote network. If `remoteNetwork` is `nil`, the rule matches any remote network.

If the port string of `localNetwork` is `0` or the empty string, then the rule matches traffic on any port coming from the local network. If `localNetwork` is `nil`, the rule matches any local network.

## See Also

### Creating a network rule

- [initWithDestinationNetwork:prefix:protocol:](init%28destinationnetwork_prefix_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific network.
- [initWithDestinationHost:protocol:](init%28destinationhost_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific DNS domain.
