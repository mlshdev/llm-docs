> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentationbuilder/buildblock(_:_:)](https://developer.apple.com/documentation/coretransferable/transferrepresentationbuilder/buildblock(_:_:))

# buildBlock(\_:\_:)

**Framework:** Core Transferable  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Combines multiple transfer representations into a single transfer representation.

## Declaration

```swift
static func buildBlock<C1, C2>(_ content1: C1, _ content2: C2) -> TupleTransferRepresentation<Item, (C1, C2)> where Item == C1.Item, C1 : TransferRepresentation, C2 : TransferRepresentation, C1.Item == C2.Item
```

## See Also

### Combining transfer representations

- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Combines multiple transfer representations into a single transfer representation.
