> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nenetworkrule/matchlocalprefix

# matchLocalPrefix (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A number that specifies the local sub-network that the rule matches.

## Declaration

```swift
var matchLocalPrefix: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property is [NSNotFound](../../foundation/nsnotfound-4qp9h.md) for rules whose [matchLocalNetwork](matchlocalnetwork.md) property is `nil.`

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchProtocol](matchprotocol.md): The protocol that the rule matches.
- [NENetworkRule.Protocol](protocol.md): A type to represent network protocols used by routing rules.
- [matchDirection](matchdirection.md): The direction of network traffic that the rule matches.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.

# matchLocalPrefix (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A number that specifies the local sub-network that the rule matches.

## Declaration

```objectivec
@property (readonly) NSUInteger matchLocalPrefix;
```

<a id="Discussion"></a>

## Discussion

This property is [NSNotFound](../../foundation/nsnotfound-4qp9h.md) for rules whose [matchLocalNetwork](matchlocalnetwork.md) property is `nil.`

## See Also

### Matching network traffic characteristics

- [matchRemoteEndpoint](matchremoteendpoint.md): Deprecated. The remote endpoint that the rule matches.
- [matchRemotePrefix](matchremoteprefix.md): A number that specifies the remote sub-network that the rule matches.
- [matchLocalNetwork](matchlocalnetwork.md): Deprecated. The local network that the rule matches.
- [matchProtocol](matchprotocol.md): The protocol that the rule matches.
- [NENetworkRuleProtocol](protocol.md): A type to represent network protocols used by routing rules.
- [matchDirection](matchdirection.md): The direction of network traffic that the rule matches.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
