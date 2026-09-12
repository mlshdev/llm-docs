> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(validating:as:)-5cw2c](https://developer.apple.com/documentation/swift/string/init(validating:as:)-5cw2c)

# init(validating:as:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.

## Declaration

```swift
init?<Encoding>(validating codeUnits: some Sequence<Int8>, as encoding: Encoding.Type) where Encoding : _UnicodeEncoding, Encoding.CodeUnit == UInt8
```

## Parameters

- `codeUnits`: A sequence of code units that encode a `String`
- `encoding`: A conformer to `Unicode.Encoding` that can decode `codeUnits` as `UInt8`

<a id="discussion"></a>

## Discussion

This initializer does not try to repair ill-formed code unit sequences. If any are found, the result of the initializer is `nil`.

The following example calls this initializer with the contents of two different arrays—first with a well-formed UTF-8 code unit sequence and then with an ill-formed ASCII code unit sequence.

```swift
let validUTF8: [Int8] = [67, 97, 0, 102, -61, -87]
let valid = String(validating: validUTF8, as: UTF8.self)
print(valid ?? "nil")
// Prints "Café"

let invalidASCII: [Int8] = [67, 97, -5]
let invalid = String(validating: invalidASCII, as: Unicode.ASCII.self)
print(invalid ?? "nil")
// Prints "nil"
```

## See Also

### Creating a String from Unicode Data

- [init(\_:)](init%28__%29-8ay23.md)
- [init(data:encoding:)](init%28data_encoding_%29.md): Returns a `String` initialized by converting given `data` into Unicode characters using a given `encoding`.
- [init(validatingUTF8:)](init%28validatingutf8_%29-208fn.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validating:as:)](init%28validating_as_%29-84qr9.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(utf8String:)](init%28utf8string_%29-8qmaq.md): Creates a string by copying the data from a given null-terminated array of UTF8-encoded bytes.
- [init(utf8String:)](init%28utf8string_%29-3mcco.md): Creates a string by copying the data from a given null-terminated C array of UTF8-encoded bytes.
- [init(utf16CodeUnits:count:)](init%28utf16codeunits_count_%29.md): Creates a new string that contains the specified number of characters from the given C array of Unicode characters.
- [init(utf16CodeUnitsNoCopy:count:freeWhenDone:)](init%28utf16codeunitsnocopy_count_freewhendone_%29.md): Deprecated. Creates a new string that contains the specified number of characters from the given C array of UTF-16 code units.
- [init(decoding:as:)](init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.
