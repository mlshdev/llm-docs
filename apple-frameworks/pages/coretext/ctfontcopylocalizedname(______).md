> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopylocalizedname(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopylocalizedname(_:_:_:))

# CTFontCopyLocalizedName(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a reference to a localized name for the given font.

## Declaration

```swift
func CTFontCopyLocalizedName(_ font: CTFont, _ nameKey: CFString, _ actualLanguage: UnsafeMutablePointer<Unmanaged<CFString>?>?) -> CFString?
```

## Parameters

- `font`: The font reference.
- `nameKey`: The name specifier. See [Name Specifier Constants](name-specifier-constants.md) for possible values.
- `actualLanguage`: On output, points to the language string of the returned name string. The format of the language identifier conforms to the RFC 3066bis standard.

<a id="return-value"></a>

## Return Value

A specific localized name from the font reference or `NULL` if the font does not have an entry for the requested name key.

<a id="Discussion"></a>

## Discussion

The name is localized based on the user’s global language preference precedence. That is, the user’s language preference is a list of languages in order of precedence. So, for example, if the list had Japanese and English, in that order, then a font that did not have Japanese name strings but had English strings would return the English strings.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName(\_:)](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName(\_:)](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName(\_:)](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyDisplayName(\_:)](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyName(\_:\_:)](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.

# CTFontCopyLocalizedName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a reference to a localized name for the given font.

## Declaration

```objectivec
extern CFStringRefCTFontCopyLocalizedName(CTFontRef font, CFStringRef nameKey, CFStringRef*actualLanguage);
```

## Parameters

- `font`: The font reference.
- `nameKey`: The name specifier. See [Name Specifier Constants](name-specifier-constants.md) for possible values.
- `actualLanguage`: On output, points to the language string of the returned name string. The format of the language identifier conforms to the RFC 3066bis standard.

<a id="return-value"></a>

## Return Value

A specific localized name from the font reference or `NULL` if the font does not have an entry for the requested name key.

<a id="Discussion"></a>

## Discussion

The name is localized based on the user’s global language preference precedence. That is, the user’s language preference is a list of languages in order of precedence. So, for example, if the list had Japanese and English, in that order, then a font that did not have Japanese name strings but had English strings would return the English strings.

## See Also

### Getting Font Names

- [CTFontCopyPostScriptName](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyDisplayName](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyName](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
