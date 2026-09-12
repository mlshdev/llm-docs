> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nenetworkrule/matchdirection](https://developer.apple.com/documentation/networkextension/nenetworkrule/matchdirection)

# matchDirection (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The direction of network traffic that the rule matches.

## Declaration

```swift
var matchDirection: NETrafficDirection { get }
```

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](matchprotocol.md): The protocol that the rule matches.
- [NENetworkRule.Protocol](protocol.md): A type to represent network protocols used by routing rules.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.

# matchDirection (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The direction of network traffic that the rule matches.

## Declaration

```objectivec
@property (readonly) NETrafficDirection matchDirection;
```

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchLocalPrefix](matchlocalprefix.md): A number that specifies the local sub-network that the rule matches.
- [matchProtocol](matchprotocol.md): The protocol that the rule matches.
- [NENetworkRuleProtocol](protocol.md): A type to represent network protocols used by routing rules.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
