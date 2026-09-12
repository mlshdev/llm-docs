> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(utf16codeunitsnocopy:count:freewhendone:)](https://developer.apple.com/documentation/swift/string/init(utf16codeunitsnocopy:count:freewhendone:))

# init(utf16CodeUnitsNoCopy:count:freeWhenDone:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 8.0+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ · watchOS 2.0+ (deprecated in 9.0)

Creates a new string that contains the specified number of characters from the given C array of UTF-16 code units.

> String does not support no-copy initialization

## Declaration

```swift
init(utf16CodeUnitsNoCopy: UnsafePointer<unichar>, count: Int, freeWhenDone flag: Bool)
```

## See Also

### Creating a String from Unicode Data

- [init(\_:)](init%28__%29-8ay23.md)
- [init(data:encoding:)](init%28data_encoding_%29.md): Returns a `String` initialized by converting given `data` into Unicode characters using a given `encoding`.
- [init(validatingUTF8:)](init%28validatingutf8_%29-208fn.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validating:as:)](init%28validating_as_%29-84qr9.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(validating:as:)](init%28validating_as_%29-5cw2c.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(utf8String:)](init%28utf8string_%29-8qmaq.md): Creates a string by copying the data from a given null-terminated array of UTF8-encoded bytes.
- [init(utf8String:)](init%28utf8string_%29-3mcco.md): Creates a string by copying the data from a given null-terminated C array of UTF8-encoded bytes.
- [init(utf16CodeUnits:count:)](init%28utf16codeunits_count_%29.md): Creates a new string that contains the specified number of characters from the given C array of Unicode characters.
- [init(decoding:as:)](init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.
