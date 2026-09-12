> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(decodingcstring:as:)-8way7](https://developer.apple.com/documentation/swift/string/init(decodingcstring:as:)-8way7)

# init(decodingCString:as:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 6.0)

Creates a new string by copying the null-terminated sequence of code units referenced by the given array.

## Declaration

```swift
init<Encoding>(decodingCString nullTerminatedCodeUnits: [Encoding.CodeUnit], as encoding: Encoding.Type) where Encoding : _UnicodeEncoding
```

## Parameters

- `nullTerminatedCodeUnits`: An array containing a null-terminated sequence of code units encoded in `encoding`.
- `encoding`: The encoding in which the code units should be interpreted.

<a id="discussion"></a>

## Discussion

If `nullTerminatedCodeUnits` contains ill-formed code unit sequences, this initializer replaces them with the Unicode replacement character (`"\u{FFFD}"`).

> **Note**

> This initializer is deprecated. Use the initializer `String.init(decoding: array, as: Encoding.self)` instead, remembering that “\\0” is a valid character in Swift.

## See Also

### Converting a C String

- [init(bytes:encoding:)](init%28bytes_encoding_%29.md): Creates a new string equivalent to the given bytes interpreted in the specified encoding. Note: This API does not interpret embedded nulls as termination of the string. Use `String?(validatingCString:)` instead for null-terminated C strings.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Deprecated. Creates a new string that contains the specified number of bytes from the given buffer, interpreted in the specified encoding, and optionally frees the buffer.
- [init(validatingCString:)](init%28validatingcstring_%29-992vo.md): Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validatingCString:)](init%28validatingcstring_%29-98wra.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given array.
- [init(cString:)](init%28cstring_%29-2p84k.md): Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.
- [init(cString:)](init%28cstring_%29-6kr8s.md): Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.
- [init(cString:encoding:)](init%28cstring_encoding_%29-3h7bc.md): Produces a string by copying the null-terminated bytes in a given array, interpreted according to a given encoding.
- [init(cString:encoding:)](init%28cstring_encoding_%29-3qgzd.md): Produces a string by copying the null-terminated bytes in a given C array, interpreted according to a given encoding.
- [decodeCString(\_:as:repairingInvalidCodeUnits:)](decodecstring%28__as_repairinginvalidcodeunits_%29-46n2p.md): Creates a new string by copying the null-terminated data referenced by the given pointer using the specified encoding.
