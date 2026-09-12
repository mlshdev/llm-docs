> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopycharacterset(_:)](https://developer.apple.com/documentation/coretext/ctfontcopycharacterset(_:))

# CTFontCopyCharacterSet(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the Unicode character set of the font.

## Declaration

```swift
func CTFontCopyCharacterSet(_ font: CTFont) -> CFCharacterSet
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A retained reference to the font’s character set.

<a id="Discussion"></a>

## Discussion

The returned character set covers the nominal referenced by the font’s Unicode `'cmap’` table.

## See Also

### Working With Encoding

- [CTFontGetStringEncoding(\_:)](ctfontgetstringencoding%28__%29.md): Returns the best string encoding for legacy format support.
- [CTFontCopySupportedLanguages(\_:)](ctfontcopysupportedlanguages%28__%29.md): Returns an array of languages supported by the font.

# CTFontCopyCharacterSet (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the Unicode character set of the font.

## Declaration

```objectivec
extern CFCharacterSetRefCTFontCopyCharacterSet(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A retained reference to the font’s character set.

<a id="Discussion"></a>

## Discussion

The returned character set covers the nominal referenced by the font’s Unicode `'cmap’` table.

## See Also

### Working With Encoding

- [CTFontGetStringEncoding](ctfontgetstringencoding%28__%29.md): Returns the best string encoding for legacy format support.
- [CTFontCopySupportedLanguages](ctfontcopysupportedlanguages%28__%29.md): Returns an array of languages supported by the font.
