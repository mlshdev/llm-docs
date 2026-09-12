> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/init(decoding:as:)](https://developer.apple.com/documentation/swift/stringprotocol/init(decoding:as:))

# init(decoding:as:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a string from the given Unicode code units in the specified encoding.

## Declaration

```swift
init<C, Encoding>(decoding codeUnits: C, as sourceEncoding: Encoding.Type) where C : Collection, Encoding : _UnicodeEncoding, C.Element == Encoding.CodeUnit
```

## Parameters

- `codeUnits`: A collection of code units encoded in the encoding specified in `sourceEncoding`.
- `sourceEncoding`: The encoding in which `codeUnits` should be interpreted.
