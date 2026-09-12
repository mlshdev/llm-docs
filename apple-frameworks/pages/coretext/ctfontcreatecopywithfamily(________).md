> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreatecopywithfamily(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreatecopywithfamily(_:_:_:_:))

# CTFontCreateCopyWithFamily(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font in the specified family based on the traits of the original font.

## Declaration

```swift
func CTFontCreateCopyWithFamily(_ font: CTFont, _ size: CGFloat, _ matrix: UnsafePointer<CGAffineTransform>?, _ family: CFString) -> CTFont?
```

## Parameters

- `font`: The original font reference on which to base the new font.
- `size`: The point size for the font reference. If `0.0` is specified, the original font’s size is preserved.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL` is specified, the original font’s matrix is preserved.
- `family`: The name of the desired family.

<a id="return-value"></a>

## Return Value

A new font reference with the original traits in the given family, or `NULL` if none is found in the system.

## See Also

### Creating Fonts

- [CTFontCreateWithName(\_:\_:\_:)](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions(\_:\_:\_:\_:)](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptor(\_:\_:\_:)](ctfontcreatewithfontdescriptor%28______%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateWithFontDescriptorAndOptions(\_:\_:\_:\_:)](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage(\_:\_:\_:)](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes(\_:\_:\_:\_:)](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits(\_:\_:\_:\_:\_:)](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateForString(\_:\_:\_:)](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
- [CTFontCreateForStringWithLanguage(\_:\_:\_:\_:)](ctfontcreateforstringwithlanguage%28________%29.md): Returns a font reference that most accurately maps the string range based on the current font and language.

# CTFontCreateCopyWithFamily (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font in the specified family based on the traits of the original font.

## Declaration

```objectivec
extern CTFontRefCTFontCreateCopyWithFamily(CTFontRef font, CGFloat size, const CGAffineTransform *matrix, CFStringRef family);
```

## Parameters

- `font`: The original font reference on which to base the new font.
- `size`: The point size for the font reference. If `0.0` is specified, the original font’s size is preserved.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL` is specified, the original font’s matrix is preserved.
- `family`: The name of the desired family.

<a id="return-value"></a>

## Return Value

A new font reference with the original traits in the given family, or `NULL` if none is found in the system.

## See Also

### Creating Fonts

- [CTFontCreateWithName](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptor](ctfontcreatewithfontdescriptor%28______%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateWithFontDescriptorAndOptions](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateForString](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
- [CTFontCreateForStringWithLanguage](ctfontcreateforstringwithlanguage%28________%29.md): Returns a font reference that most accurately maps the string range based on the current font and language.
