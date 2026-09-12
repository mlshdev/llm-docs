> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetstringencoding(_:)](https://developer.apple.com/documentation/coretext/ctfontgetstringencoding(_:))

# CTFontGetStringEncoding(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the best string encoding for legacy format support.

## Declaration

```swift
func CTFontGetStringEncoding(_ font: CTFont) -> CFStringEncoding
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The best string encoding for the font.

## See Also

### Working With Encoding

- [CTFontCopyCharacterSet(\_:)](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontCopySupportedLanguages(\_:)](ctfontcopysupportedlanguages%28__%29.md): Returns an array of languages supported by the font.

# CTFontGetStringEncoding (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the best string encoding for legacy format support.

## Declaration

```objectivec
extern CFStringEncoding CTFontGetStringEncoding(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The best string encoding for the font.

## See Also

### Working With Encoding

- [CTFontCopyCharacterSet](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontCopySupportedLanguages](ctfontcopysupportedlanguages%28__%29.md): Returns an array of languages supported by the font.
