> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netrafficdirection](https://developer.apple.com/documentation/networkextension/netrafficdirection)

# NETrafficDirection (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A type to represent the direction of network traffic.

## Declaration

```swift
enum NETrafficDirection
```

## Topics

### Directions

- [NETrafficDirection.inbound](netrafficdirection/inbound.md): The inbound traffic direction.
- [NETrafficDirection.outbound](netrafficdirection/outbound.md): The outbound traffic direction.
- [NETrafficDirection.any](netrafficdirection/any.md): A direction that matches either inbound or outbound traffic.

### Initializers

- [init(rawValue:)](netrafficdirection/init%28rawvalue_%29.md)

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

- [matchRemoteEndpoint](nenetworkrule/matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](nenetworkrule/matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](nenetworkrule/matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](nenetworkrule/matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](nenetworkrule/matchprotocol.md): The protocol that the rule matches.
- [NENetworkRule.Protocol](nenetworkrule/protocol.md): A type to represent network protocols used by routing rules.
- [matchDirection](nenetworkrule/matchdirection.md): The direction of network traffic that the rule matches.

# NETrafficDirection (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A type to represent the direction of network traffic.

## Declaration

```objectivec
enum NETrafficDirection : NSInteger;
```

## Topics

### Directions

- [NETrafficDirectionInbound](netrafficdirection/inbound.md): The inbound traffic direction.
- [NETrafficDirectionOutbound](netrafficdirection/outbound.md): The outbound traffic direction.
- [NETrafficDirectionAny](netrafficdirection/any.md): A direction that matches either inbound or outbound traffic.

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](nenetworkrule/matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](nenetworkrule/matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](nenetworkrule/matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](nenetworkrule/matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](nenetworkrule/matchprotocol.md): The protocol that the rule matches.
- [NENetworkRuleProtocol](nenetworkrule/protocol.md): A type to represent network protocols used by routing rules.
- [matchDirection](nenetworkrule/matchdirection.md): The direction of network traffic that the rule matches.
