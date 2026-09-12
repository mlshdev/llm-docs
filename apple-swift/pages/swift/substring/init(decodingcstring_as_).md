> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/init(decodingcstring:as:)](https://developer.apple.com/documentation/swift/substring/init(decodingcstring:as:))

# init(decodingCString:as:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a string from the null-terminated sequence of bytes at the given pointer.

## Declaration

```swift
init<Encoding>(decodingCString nullTerminatedCodeUnits: UnsafePointer<Encoding.CodeUnit>, as sourceEncoding: Encoding.Type) where Encoding : _UnicodeEncoding
```

## Parameters

- `nullTerminatedCodeUnits`: A pointer to a sequence of contiguous code units in the encoding specified in `sourceEncoding`, ending just before the first zero code unit.
- `sourceEncoding`: The encoding in which the code units should be interpreted.
