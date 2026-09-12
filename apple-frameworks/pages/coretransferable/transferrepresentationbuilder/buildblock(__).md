> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentationbuilder/buildblock(_:)](https://developer.apple.com/documentation/coretransferable/transferrepresentationbuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** Core Transferable  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Passes a single transfer representation to the builder unmodified.

## Declaration

```swift
static func buildBlock<Content>(_ content: Content) -> Content where Item == Content.Item, Content : TransferRepresentation
```

## See Also

### Building a transfer representation

- [buildExpression(\_:)](buildexpression%28__%29-3z8sl.md): Builds a transfer representation from an expression.
- [buildExpression(\_:)](buildexpression%28__%29-6qtdp.md): Builds an encodable and decodable transfer representation from an expression.
