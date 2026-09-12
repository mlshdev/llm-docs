> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentationbuilder/buildexpression(_:)-6qtdp](https://developer.apple.com/documentation/coretransferable/transferrepresentationbuilder/buildexpression(_:)-6qtdp)

# buildExpression(\_:)

**Framework:** Core Transferable  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Builds an encodable and decodable transfer representation from an expression.

## Declaration

```swift
static func buildExpression<Encoder, Decoder>(_ content: CodableRepresentation<Item, Encoder, Decoder>) -> CodableRepresentation<Item, Encoder, Decoder> where Item : Decodable, Item : Encodable, Encoder : TopLevelEncoder, Decoder : TopLevelDecoder, Encoder.Output == Data, Decoder.Input == Data
```

## See Also

### Building a transfer representation

- [buildBlock(\_:)](buildblock%28__%29.md): Passes a single transfer representation to the builder unmodified.
- [buildExpression(\_:)](buildexpression%28__%29-3z8sl.md): Builds a transfer representation from an expression.
