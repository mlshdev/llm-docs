> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/contentcontext/identifier](https://developer.apple.com/documentation/network/nwconnection/contentcontext/identifier)

# identifier

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The identifier of the message, used for debugging.

## Declaration

```swift
final let identifier: String
```

## See Also

### Creating Custom Send Contexts

- [init(identifier:expiration:priority:isFinal:antecedent:metadata:)](init%28identifier_expiration_priority_isfinal_antecedent_metadata_%29.md): Initializes a custom message context.
- [protocolMetadata](protocolmetadata.md): An array of protocol metadata used to configure per-message or per-packet properties.
- [NWProtocolMetadata](../../nwprotocolmetadata.md): The abstract superclass for specifying metadata about a network protocol.
- [antecedent](antecedent.md): An optional message context that must be sent before the context you are sending.
- [expirationMilliseconds](expirationmilliseconds.md): A number of milliseconds after which sending the data associated with this context must begin, otherwise the data is discarded.
- [relativePriority](relativepriority.md): A relative value of priority used to reorder contexts when sending.
