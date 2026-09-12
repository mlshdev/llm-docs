> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/stringprotocol-implementations](https://developer.apple.com/documentation/swift/substring/stringprotocol-implementations)

# StringProtocol Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Structures

- [Substring.UTF16View](utf16view.md)
- [Substring.UTF8View](utf8view.md)
- [Substring.UnicodeScalarView](unicodescalarview.md)

### Operators

- [!=(\_:\_:)](!=%28____%29-fryj.md)
- [==(\_:\_:)](==%28____%29.md)
- [\>(\_:\_:)](_%28____%29-6o7pz.md)
- [\<(\_:\_:)](_%28____%29-8d1w2.md)
- [\<=(\_:\_:)](_=%28____%29-5y23r.md)
- [\>=(\_:\_:)](_=%28____%29-nd7a.md)

### Initializers

- [init(cString:)](init%28cstring_%29.md): Creates a string from the null-terminated, UTF-8 encoded sequence of bytes at the given pointer.
- [init(decoding:as:)](init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.
- [init(decodingCString:as:)](init%28decodingcstring_as_%29.md): Creates a string from the null-terminated sequence of bytes at the given pointer.

### Instance Properties

- [unicodeScalars](unicodescalars.md)
- [utf16](utf16.md)
- [utf8](utf8.md)

### Instance Methods

- [hasPrefix(\_:)](hasprefix%28__%29.md): Returns a Boolean value indicating whether the string begins with the specified prefix.
- [hasSuffix(\_:)](hassuffix%28__%29.md): Returns a Boolean value indicating whether the string ends with the specified suffix.
- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
- [lowercased()](lowercased%28%29.md)
- [uppercased()](uppercased%28%29.md)
- [withCString(\_:)](withcstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.
- [withCString(encodedAs:\_:)](withcstring%28encodedas___%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of code units.
