> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf32/parser](https://developer.apple.com/documentation/swift/unicode/utf32/parser)

# Unicode.UTF32.Parser

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@frozen struct Parser
```

## Topics

### Initializers

- [init()](parser/init%28%29.md): Constructs an instance that can be used to begin parsing `CodeUnit`s at any Unicode scalar boundary.

### Instance Methods

- [parseScalar(from:)](parser/parsescalar%28from_%29.md): Parses a single Unicode scalar value from `input`.

### Type Aliases

- [Unicode.UTF32.Parser.Encoding](parser/encoding.md): The encoding with which this parser is associated

## Relationships

### Conforms To

- [BitwiseCopyable](../../bitwisecopyable.md)
- [Copyable](../../copyable.md)
- [Escapable](../../escapable.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)
