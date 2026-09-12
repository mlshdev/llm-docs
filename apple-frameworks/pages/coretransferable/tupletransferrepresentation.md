> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/tupletransferrepresentation](https://developer.apple.com/documentation/coretransferable/tupletransferrepresentation)

# TupleTransferRepresentation

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A wrapper type for tuples that contain transfer representations.

## Declaration

```swift
struct TupleTransferRepresentation<Item, Value> where Item : Transferable, Value : Sendable
```

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](transferrepresentation.md)

## See Also

### Supporting types

- [TransferRepresentationBuilder](transferrepresentationbuilder.md): Creates a transfer representation by composing existing transfer representations.
