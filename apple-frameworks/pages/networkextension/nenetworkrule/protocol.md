> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nenetworkrule/protocol](https://developer.apple.com/documentation/networkextension/nenetworkrule/protocol)

# NENetworkRule.Protocol (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A type to represent network protocols used by routing rules.

## Declaration

```swift
enum `Protocol`
```

## Topics

### Protocols

- [NENetworkRule.Protocol.TCP](protocol/tcp.md): A rule protocol to match TCP traffic.
- [NENetworkRule.Protocol.UDP](protocol/udp.md): A rule protocol to match UDP traffic.
- [NENetworkRule.Protocol.any](protocol/any.md): A rule protocol to match TCP and UDP traffic.

### Initializers

- [init(rawValue:)](protocol/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](matchprotocol.md): The protocol that the rule matches.
- [matchDirection](matchdirection.md): The direction of network traffic that the rule matches.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.

# NENetworkRuleProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A type to represent network protocols used by routing rules.

## Declaration

```objectivec
enum NENetworkRuleProtocol : NSInteger;
```

## Topics

### Protocols

- [NENetworkRuleProtocolTCP](protocol/tcp.md): A rule protocol to match TCP traffic.
- [NENetworkRuleProtocolUDP](protocol/udp.md): A rule protocol to match UDP traffic.
- [NENetworkRuleProtocolAny](protocol/any.md): A rule protocol to match TCP and UDP traffic.

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](matchprotocol.md): The protocol that the rule matches.
- [matchDirection](matchdirection.md): The direction of network traffic that the rule matches.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
