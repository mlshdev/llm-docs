> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kskendtermchars](https://developer.apple.com/documentation/coreservices/kskendtermchars)

# kSKEndTermChars (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
let kSKEndTermChars: CFString!
```

<a id="discussion"></a>

## Discussion

Additional valid last-position “word” characters for indexing and querying. The corresponding value, a CFString object, specifies the additional valid “word” characters that you want to be considered as valid ending characters of terms for indexing and querying. “Word” characters are contrasted with nonword characters, such as spaces.

The value of `kSKEndTermChars`, if this key is present, overrides the value of `kSKTermChars` for the last character of a term.

By default, Search Kit considers alphanumeric characters as valid ending characters for terms, and considers all others (including the underscore character) to be nonword characters.

# kSKEndTermChars (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```objectivec
const CFStringRef kSKEndTermChars;
```

<a id="discussion"></a>

## Discussion

Additional valid last-position “word” characters for indexing and querying. The corresponding value, a CFString object, specifies the additional valid “word” characters that you want to be considered as valid ending characters of terms for indexing and querying. “Word” characters are contrasted with nonword characters, such as spaces.

The value of `kSKEndTermChars`, if this key is present, overrides the value of `kSKTermChars` for the last character of a term.

By default, Search Kit considers alphanumeric characters as valid ending characters for terms, and considers all others (including the underscore character) to be nonword characters.
