> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/textoutputstreamable](https://developer.apple.com/documentation/swift/textoutputstreamable)

# TextOutputStreamable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A source of text-streaming operations.

## Declaration

```swift
protocol TextOutputStreamable
```

<a id="overview"></a>

## Overview

Instances of types that conform to the `TextOutputStreamable` protocol can write their value to instances of any type that conforms to the `TextOutputStream` protocol. The Swift standard library’s text-related types, `String`, `Character`, and `Unicode.Scalar`, all conform to `TextOutputStreamable`.

<a id="Conforming-to-the-TextOutputStreamable-Protocol"></a>

## Conforming to the TextOutputStreamable Protocol

To add `TextOutputStreamable` conformance to a custom type, implement the required `write(to:)` method. Call the given output stream’s `write(_:)` method in your implementation.

## Topics

### Instance Methods

- [write(to:)](textoutputstreamable/write%28to_%29.md): Writes a textual representation of this instance into the given output stream.

## Relationships

### Inherited By

- [StringProtocol](stringprotocol.md)

### Conforming Types

- [Character](character.md)
- [Double](double.md)
- [Float](float.md)
- [Float16](float16.md)
- [Float80](float80.md)
- [String](string.md)
- [Substring](substring.md)
- [Unicode.Scalar](unicode/scalar.md)

## See Also

### Streams

- [TextOutputStream](textoutputstream.md): A type that can be the target of text-streaming operations.
