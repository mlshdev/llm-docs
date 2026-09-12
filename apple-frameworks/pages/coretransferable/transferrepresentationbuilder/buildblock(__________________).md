> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentationbuilder/buildblock(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/coretransferable/transferrepresentationbuilder/buildblock(_:_:_:_:_:_:_:_:_:))

# buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)

**Framework:** Core Transferable  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Combines multiple transfer representations into a single transfer representation.

## Declaration

```swift
static func buildBlock<C1, C2, C3, C4, C5, C6, C7, C8, C9>(_ content1: C1, _ content2: C2, _ content3: C3, _ content4: C4, _ content5: C5, _ content6: C6, _ content7: C7, _ content8: C8, _ content9: C9) -> TupleTransferRepresentation<Item, (C1, C2, C3, C4, C5, C6, C7, C8, C9)> where Item == C1.Item, C1 : TransferRepresentation, C2 : TransferRepresentation, C3 : TransferRepresentation, C4 : TransferRepresentation, C5 : TransferRepresentation, C6 : TransferRepresentation, C7 : TransferRepresentation, C8 : TransferRepresentation, C9 : TransferRepresentation, C1.Item == C2.Item, C2.Item == C3.Item, C3.Item == C4.Item, C4.Item == C5.Item, C5.Item == C6.Item, C6.Item == C7.Item, C7.Item == C8.Item, C8.Item == C9.Item
```

## See Also

### Combining transfer representations

- [buildBlock(\_:\_:)](buildblock%28____%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Combines multiple transfer representations into a single transfer representation.
