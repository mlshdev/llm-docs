> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(cstring:)-6kr8s](https://developer.apple.com/documentation/swift/string/init(cstring:)-6kr8s)

# init(cString:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.

## Declaration

```swift
init(cString nullTerminatedUTF8: UnsafePointer<UInt8>)
```

## Parameters

- `nullTerminatedUTF8`: A pointer to a null-terminated sequence of UTF-8 code units.

<a id="discussion"></a>

## Discussion

This is identical to `init(cString: UnsafePointer<CChar>)` but operates on an unsigned sequence of bytes.

## See Also

### Converting a C String

- [init(bytes:encoding:)](init%28bytes_encoding_%29.md): Creates a new string equivalent to the given bytes interpreted in the specified encoding. Note: This API does not interpret embedded nulls as termination of the string. Use `String?(validatingCString:)` instead for null-terminated C strings.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Deprecated. Creates a new string that contains the specified number of bytes from the given buffer, interpreted in the specified encoding, and optionally frees the buffer.
- [init(validatingCString:)](init%28validatingcstring_%29-992vo.md): Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validatingCString:)](init%28validatingcstring_%29-98wra.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given array.
- [init(cString:)](init%28cstring_%29-2p84k.md): Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.
- [init(cString:encoding:)](init%28cstring_encoding_%29-3h7bc.md): Produces a string by copying the null-terminated bytes in a given array, interpreted according to a given encoding.
- [init(cString:encoding:)](init%28cstring_encoding_%29-3qgzd.md): Produces a string by copying the null-terminated bytes in a given C array, interpreted according to a given encoding.
- [init(decodingCString:as:)](init%28decodingcstring_as_%29-8way7.md): Deprecated. Creates a new string by copying the null-terminated sequence of code units referenced by the given array.
- [decodeCString(\_:as:repairingInvalidCodeUnits:)](decodecstring%28__as_repairinginvalidcodeunits_%29-46n2p.md): Creates a new string by copying the null-terminated data referenced by the given pointer using the specified encoding.
