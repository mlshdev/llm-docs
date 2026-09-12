> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(data:encoding:)](https://developer.apple.com/documentation/swift/string/init(data:encoding:))

# init(data:encoding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `String` initialized by converting given `data` into Unicode characters using a given `encoding`.

## Declaration

```swift
init?(data: Data, encoding: String.Encoding)
```

## See Also

### Creating a String from Unicode Data

- [init(\_:)](init%28__%29-8ay23.md)
- [init(validatingUTF8:)](init%28validatingutf8_%29-208fn.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validating:as:)](init%28validating_as_%29-84qr9.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(validating:as:)](init%28validating_as_%29-5cw2c.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(utf8String:)](init%28utf8string_%29-8qmaq.md): Creates a string by copying the data from a given null-terminated array of UTF8-encoded bytes.
- [init(utf8String:)](init%28utf8string_%29-3mcco.md): Creates a string by copying the data from a given null-terminated C array of UTF8-encoded bytes.
- [init(utf16CodeUnits:count:)](init%28utf16codeunits_count_%29.md): Creates a new string that contains the specified number of characters from the given C array of Unicode characters.
- [init(utf16CodeUnitsNoCopy:count:freeWhenDone:)](init%28utf16codeunitsnocopy_count_freewhendone_%29.md): Deprecated. Creates a new string that contains the specified number of characters from the given C array of UTF-16 code units.
- [init(decoding:as:)](init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.
