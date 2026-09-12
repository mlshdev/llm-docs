> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(cstring:)-54awj](https://developer.apple.com/documentation/swift/string/init(cstring:)-54awj)

# init(cString:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 6.0)

Creates a new string by copying the null-terminated UTF-8 data referenced by the given array.

## Declaration

```swift
init(cString nullTerminatedUTF8: [CChar])
```

## Parameters

- `nullTerminatedUTF8`: An array containing a null-terminated sequence of UTF-8 code units.

<a id="discussion"></a>

## Discussion

If `cString` contains ill-formed UTF-8 code unit sequences, this initializer replaces them with the Unicode replacement character (`"\u{FFFD}"`).

> **Note**

> This initializer is deprecated. Use the initializer `String.init(decoding: array, as: UTF8.self)` instead, remembering that “\\0” is a valid character in Swift.
