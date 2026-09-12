> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreateforstringwithlanguage(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreateforstringwithlanguage(_:_:_:_:))

# CTFontCreateForStringWithLanguage(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a font reference that most accurately maps the string range based on the current font and language.

## Declaration

```swift
func CTFontCreateForStringWithLanguage(_ currentFont: CTFont, _ string: CFString, _ range: CFRange, _ language: CFString?) -> CTFont
```

## Parameters

- `currentFont`: The current font that contains a valid cascade list.
- `string`: A Unicode string containing characters that can’t be encoded by the current font.
- `range`: A [CFRange](../corefoundation/cfrange.md) specifying the range of the string to map.
- `language`: A language identifier to select a font for a particular localization.

<a id="return-value"></a>

## Return Value

The best substitute font that can encode the specified string range.

<a id="Discussion"></a>

## Discussion

The current font itself can be returned if it covers the string provided. If the caller does not specify the language parameter, the function uses the current system language. The format of the language identifier should conform to [UTS #35](http://unicode.org/reports/tr35/).

## See Also

### Related Documentation

- [CTFontCopyCharacterSet(\_:)](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontGetGlyphsForCharacters(\_:\_:\_:\_:)](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [kCTFontCascadeListAttribute](kctfontcascadelistattribute.md): The cascade list used for a font reference.

### Creating Fonts

- [CTFontCreateWithName(\_:\_:\_:)](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions(\_:\_:\_:\_:)](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptor(\_:\_:\_:)](ctfontcreatewithfontdescriptor%28______%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateWithFontDescriptorAndOptions(\_:\_:\_:\_:)](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage(\_:\_:\_:)](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes(\_:\_:\_:\_:)](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits(\_:\_:\_:\_:\_:)](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateCopyWithFamily(\_:\_:\_:\_:)](ctfontcreatecopywithfamily%28________%29.md): Returns a new font in the specified family based on the traits of the original font.
- [CTFontCreateForString(\_:\_:\_:)](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.

# CTFontCreateForStringWithLanguage (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a font reference that most accurately maps the string range based on the current font and language.

## Declaration

```objectivec
extern CTFontRefCTFontCreateForStringWithLanguage(CTFontRef currentFont, CFStringRef string, CFRange range, CFStringRef language);
```

## Parameters

- `currentFont`: The current font that contains a valid cascade list.
- `string`: A Unicode string containing characters that can’t be encoded by the current font.
- `range`: A [CFRange](../corefoundation/cfrange.md) specifying the range of the string to map.
- `language`: A language identifier to select a font for a particular localization.

<a id="return-value"></a>

## Return Value

The best substitute font that can encode the specified string range.

<a id="Discussion"></a>

## Discussion

The current font itself can be returned if it covers the string provided. If the caller does not specify the language parameter, the function uses the current system language. The format of the language identifier should conform to [UTS #35](http://unicode.org/reports/tr35/).

## See Also

### Related Documentation

- [CTFontCopyCharacterSet](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontGetGlyphsForCharacters](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [kCTFontCascadeListAttribute](kctfontcascadelistattribute.md): The cascade list used for a font reference.

### Creating Fonts

- [CTFontCreateWithName](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptor](ctfontcreatewithfontdescriptor%28______%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateWithFontDescriptorAndOptions](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateCopyWithFamily](ctfontcreatecopywithfamily%28________%29.md): Returns a new font in the specified family based on the traits of the original font.
- [CTFontCreateForString](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
