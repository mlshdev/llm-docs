> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf32/parser/parsescalar(from:)](https://developer.apple.com/documentation/swift/unicode/utf32/parser/parsescalar(from:))

# parseScalar(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Parses a single Unicode scalar value from `input`.

## Declaration

```swift
mutating func parseScalar<I>(from input: inout I) -> Unicode.ParseResult<Unicode.UTF32.Parser.Encoding.EncodedScalar> where I : IteratorProtocol, I.Element == UInt32
```
