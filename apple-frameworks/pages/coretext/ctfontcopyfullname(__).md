> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyfullname(_:)](https://developer.apple.com/documentation/coretext/ctfontcopyfullname(_:))

# CTFontCopyFullName(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full name of the given font.

## Declaration

```swift
func CTFontCopyFullName(_ font: CTFont) -> CFString
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A retained reference to the full name of the font.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName(\_:)](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName(\_:)](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyDisplayName(\_:)](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyName(\_:\_:)](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
- [CTFontCopyLocalizedName(\_:\_:\_:)](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.

# CTFontCopyFullName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full name of the given font.

## Declaration

```objectivec
extern CFStringRefCTFontCopyFullName(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A retained reference to the full name of the font.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyDisplayName](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyName](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
- [CTFontCopyLocalizedName](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.
