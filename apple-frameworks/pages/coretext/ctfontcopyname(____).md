> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyname(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopyname(_:_:))

# CTFontCopyName(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a reference to the requested name of the given font.

## Declaration

```swift
func CTFontCopyName(_ font: CTFont, _ nameKey: CFString) -> CFString?
```

## Parameters

- `font`: The font reference.
- `nameKey`: The name specifier. See [Name Specifier Constants](name-specifier-constants.md) for possible values.

<a id="return-value"></a>

## Return Value

The requested name for the font, or `NULL` if the font does not have an entry for the requested name. The Unicode version of the name is preferred, otherwise the first available version is returned.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName(\_:)](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName(\_:)](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName(\_:)](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyDisplayName(\_:)](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyLocalizedName(\_:\_:\_:)](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.

# CTFontCopyName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a reference to the requested name of the given font.

## Declaration

```objectivec
extern CFStringRefCTFontCopyName(CTFontRef font, CFStringRef nameKey);
```

## Parameters

- `font`: The font reference.
- `nameKey`: The name specifier. See [Name Specifier Constants](name-specifier-constants.md) for possible values.

<a id="return-value"></a>

## Return Value

The requested name for the font, or `NULL` if the font does not have an entry for the requested name. The Unicode version of the name is preferred, otherwise the first available version is returned.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyDisplayName](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyLocalizedName](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.
