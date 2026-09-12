> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nenetworkrule](https://developer.apple.com/documentation/networkextension/nenetworkrule)

# NENetworkRule (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A rule to match attributes of network traffic.

## Declaration

```swift
class NENetworkRule
```

## Topics

### Creating a network rule

- [init(destinationNetwork:prefix:protocol:)](nenetworkrule/init%28destinationnetwork_prefix_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific network.
- [init(destinationHost:protocol:)](nenetworkrule/init%28destinationhost_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific DNS domain.
- [init(remoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:)](nenetworkrule/init%28remotenetwork_remoteprefix_localnetwork_localprefix_protocol_direction_%29.md): Deprecated. Creates a rule that matches traffic by remote network, local network, protocol, and direction.

### Matching network traffic characteristics

- [matchRemoteEndpoint](nenetworkrule/matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](nenetworkrule/matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](nenetworkrule/matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](nenetworkrule/matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](nenetworkrule/matchprotocol.md): The protocol that the rule matches.
- [NENetworkRule.Protocol](nenetworkrule/protocol.md): A type to represent network protocols used by routing rules.
- [matchDirection](nenetworkrule/matchdirection.md): The direction of network traffic that the rule matches.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.

### Initializers

- [init(destinationHostEndpoint:protocol:)](nenetworkrule/init%28destinationhostendpoint_protocol_%29.md)
- [init(destinationNetworkEndpoint:prefix:protocol:)](nenetworkrule/init%28destinationnetworkendpoint_prefix_protocol_%29.md)
- [init(remoteNetworkEndpoint:remotePrefix:localNetworkEndpoint:localPrefix:protocol:direction:)](nenetworkrule/init%28remotenetworkendpoint_remoteprefix_localnetworkendpoint_localprefix_protocol_direction_%29.md)

### Instance Properties

- [matchLocalNetworkEndpoint](nenetworkrule/matchlocalnetworkendpoint-62ttv.md)
- [matchRemoteHostOrNetworkEndpoint](nenetworkrule/matchremotehostornetworkendpoint-4a5ht.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyManager](netransparentproxymanager.md): An object that configures and controls transparent proxies.
- [NETransparentProxyProvider](netransparentproxyprovider.md): An object that implements the client side of a custom transparent network proxy solution.
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md): A specification of what traffic to route through a transparent proxy.

# NENetworkRule (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A rule to match attributes of network traffic.

## Declaration

```objectivec
@interface NENetworkRule : NSObject
```

## Topics

### Creating a network rule

- [initWithDestinationNetwork:prefix:protocol:](nenetworkrule/init%28destinationnetwork_prefix_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific network.
- [initWithDestinationHost:protocol:](nenetworkrule/init%28destinationhost_protocol_%29.md): Deprecated. Creates a rule that matches network traffic destined for a host within a specific DNS domain.
- [initWithRemoteNetwork:remotePrefix:localNetwork:localPrefix:protocol:direction:](nenetworkrule/init%28remotenetwork_remoteprefix_localnetwork_localprefix_protocol_direction_%29.md): Deprecated. Creates a rule that matches traffic by remote network, local network, protocol, and direction.

### Matching network traffic characteristics

- [matchRemoteEndpoint](nenetworkrule/matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](nenetworkrule/matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](nenetworkrule/matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](nenetworkrule/matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](nenetworkrule/matchprotocol.md): The protocol that the rule matches.
- [NENetworkRuleProtocol](nenetworkrule/protocol.md): A type to represent network protocols used by routing rules.
- [matchDirection](nenetworkrule/matchdirection.md): The direction of network traffic that the rule matches.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.

### Instance Properties

- [matchLocalNetworkEndpoint](nenetworkrule/matchlocalnetworkendpoint-9dyor.md)
- [matchRemoteHostOrNetworkEndpoint](nenetworkrule/matchremotehostornetworkendpoint-80s0l.md)

### Instance Methods

- [initWithDestinationHostEndpoint:protocol:](nenetworkrule/initwithdestinationhostendpoint_protocol_.md)
- [initWithDestinationNetworkEndpoint:prefix:protocol:](nenetworkrule/initwithdestinationnetworkendpoint_prefix_protocol_.md)
- [initWithRemoteNetworkEndpoint:remotePrefix:localNetworkEndpoint:localPrefix:protocol:direction:](nenetworkrule/initwithremotenetworkendpoint_remoteprefix_localnetworkendpoint_localprefix_protocol_direction_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transparent proxy configuration

- [NETransparentProxyManager](netransparentproxymanager.md): An object that configures and controls transparent proxies.
- [NETransparentProxyProvider](netransparentproxyprovider.md): An object that implements the client side of a custom transparent network proxy solution.
- [NETransparentProxyNetworkSettings](netransparentproxynetworksettings.md): A specification of what traffic to route through a transparent proxy.
