> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf16/reverseparser](https://developer.apple.com/documentation/swift/unicode/utf16/reverseparser)

# Unicode.UTF16.ReverseParser

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be used to parse a reversed sequence of `CodeUnits` into `EncodedScalar`s.

## Declaration

```swift
@frozen struct ReverseParser
```

## Topics

### Initializers

- [init()](reverseparser/init%28%29.md): Constructs an instance that can be used to begin parsing `CodeUnit`s at any Unicode scalar boundary.

### Type Aliases

- [Unicode.UTF16.ReverseParser.Encoding](reverseparser/encoding.md): The encoding with which this parser is associated

## Relationships

### Conforms To

- [BitwiseCopyable](../../bitwisecopyable.md)
- [Copyable](../../copyable.md)
- [Escapable](../../escapable.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)
