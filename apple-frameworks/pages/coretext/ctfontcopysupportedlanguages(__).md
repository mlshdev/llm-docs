> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopysupportedlanguages(_:)](https://developer.apple.com/documentation/coretext/ctfontcopysupportedlanguages(_:))

# CTFontCopySupportedLanguages(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of languages supported by the font.

## Declaration

```swift
func CTFontCopySupportedLanguages(_ font: CTFont) -> CFArray
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A retained reference to an array of languages supported by the font. The array contains language identifier strings as `CFStringRef` objects. The format of the language identifier conforms to the RFC 3066bis standard.

## See Also

### Working With Encoding

- [CTFontCopyCharacterSet(\_:)](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontGetStringEncoding(\_:)](ctfontgetstringencoding%28__%29.md): Returns the best string encoding for legacy format support.

# CTFontCopySupportedLanguages (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of languages supported by the font.

## Declaration

```objectivec
extern CFArrayRefCTFontCopySupportedLanguages(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A retained reference to an array of languages supported by the font. The array contains language identifier strings as `CFStringRef` objects. The format of the language identifier conforms to the RFC 3066bis standard.

## See Also

### Working With Encoding

- [CTFontCopyCharacterSet](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontGetStringEncoding](ctfontgetstringencoding%28__%29.md): Returns the best string encoding for legacy format support.
