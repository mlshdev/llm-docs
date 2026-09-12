> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopydisplayname(_:)](https://developer.apple.com/documentation/coretext/ctfontcopydisplayname(_:))

# CTFontCopyDisplayName(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the display name of the given font.

## Declaration

```swift
func CTFontCopyDisplayName(_ font: CTFont) -> CFString
```

## Parameters

- `font`: The font reference.

<a id="Discussion"></a>

## Discussion

A retained reference to the localized display name of the font.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName(\_:)](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName(\_:)](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName(\_:)](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyName(\_:\_:)](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
- [CTFontCopyLocalizedName(\_:\_:\_:)](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.

# CTFontCopyDisplayName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the display name of the given font.

## Declaration

```objectivec
extern CFStringRefCTFontCopyDisplayName(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="Discussion"></a>

## Discussion

A retained reference to the localized display name of the font.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyName](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
- [CTFontCopyLocalizedName](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.
