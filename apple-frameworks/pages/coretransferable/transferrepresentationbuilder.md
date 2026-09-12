> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentationbuilder](https://developer.apple.com/documentation/coretransferable/transferrepresentationbuilder)

# TransferRepresentationBuilder

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation by composing existing transfer representations.

## Declaration

```swift
@resultBuilder struct TransferRepresentationBuilder<Item> where Item : Transferable
```

## Topics

### Building a transfer representation

- [buildBlock(\_:)](transferrepresentationbuilder/buildblock%28__%29.md): Passes a single transfer representation to the builder unmodified.
- [buildExpression(\_:)](transferrepresentationbuilder/buildexpression%28__%29-3z8sl.md): Builds a transfer representation from an expression.
- [buildExpression(\_:)](transferrepresentationbuilder/buildexpression%28__%29-6qtdp.md): Builds an encodable and decodable transfer representation from an expression.

### Combining transfer representations

- [buildBlock(\_:\_:)](transferrepresentationbuilder/buildblock%28____%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:)](transferrepresentationbuilder/buildblock%28______%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28__________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28____________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28______________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28________________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28__________________%29.md): Combines multiple transfer representations into a single transfer representation.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](transferrepresentationbuilder/buildblock%28____________________%29.md): Combines multiple transfer representations into a single transfer representation.

## See Also

### Supporting types

- [TupleTransferRepresentation](tupletransferrepresentation.md): A wrapper type for tuples that contain transfer representations.
