> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/contentcontext/init(identifier:expiration:priority:isfinal:antecedent:metadata:)](https://developer.apple.com/documentation/network/nwconnection/contentcontext/init(identifier:expiration:priority:isfinal:antecedent:metadata:))

# init(identifier:expiration:priority:isFinal:antecedent:metadata:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a custom message context.

## Declaration

```swift
init(identifier: String, expiration: UInt64 = 0, priority: Double = 0.5, isFinal: Bool = false, antecedent: NWConnection.ContentContext? = nil, metadata: [NWProtocolMetadata]? = [])
```

## See Also

### Creating Custom Send Contexts

- [identifier](identifier.md): The identifier of the message, used for debugging.
- [protocolMetadata](protocolmetadata.md): An array of protocol metadata used to configure per-message or per-packet properties.
- [NWProtocolMetadata](../../nwprotocolmetadata.md): The abstract superclass for specifying metadata about a network protocol.
- [antecedent](antecedent.md): An optional message context that must be sent before the context you are sending.
- [expirationMilliseconds](expirationmilliseconds.md): A number of milliseconds after which sending the data associated with this context must begin, otherwise the data is discarded.
- [relativePriority](relativepriority.md): A relative value of priority used to reorder contexts when sending.
