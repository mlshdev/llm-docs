> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/stringprotocol-implementations](https://developer.apple.com/documentation/swift/string/stringprotocol-implementations)

# StringProtocol Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Structures

- [String.UTF16View](utf16view.md): A view of a string’s contents as a collection of UTF-16 code units.
- [String.UTF8View](utf8view.md): A view of a string’s contents as a collection of UTF-8 code units.
- [String.UnicodeScalarView](unicodescalarview.md): A view of a string’s contents as a collection of Unicode scalar values.

### Operators

- [!=(\_:\_:)](!=%28____%29-frzf.md)
- [==(\_:\_:)](==%28____%29-8kzxf.md)
- [\>(\_:\_:)](_%28____%29-6o7qv.md)
- [\<(\_:\_:)](_%28____%29-8d1wy.md)
- [\<=(\_:\_:)](_=%28____%29-5y22v.md)
- [\>=(\_:\_:)](_=%28____%29-nd86.md)

### Initializers

- [init(cString:)](init%28cstring_%29-2p84k.md): Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.
- [init(decoding:as:)](init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.
- [init(decodingCString:as:)](init%28decodingcstring_as_%29-8yowf.md): Creates a new string by copying the null-terminated sequence of code units referenced by the given pointer.

### Instance Properties

- [unicodeScalars](unicodescalars.md): The string’s value represented as a collection of Unicode scalar values.
- [utf16](utf16.md): A UTF-16 encoding of `self`.
- [utf8](utf8.md): A UTF-8 encoding of `self`.

### Instance Methods

- [hasPrefix(\_:)](hasprefix%28__%29.md)
- [hasSuffix(\_:)](hassuffix%28__%29.md)
- [lowercased()](lowercased%28%29.md): Returns a lowercase version of the string.
- [uppercased()](uppercased%28%29.md): Returns an uppercase version of the string.
- [withCString(\_:)](withcstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.
- [withCString(encodedAs:\_:)](withcstring%28encodedas___%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of code units.
