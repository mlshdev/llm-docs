> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreatewithfontdescriptor(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreatewithfontdescriptor(_:_:_:))

# CTFontCreateWithFontDescriptor(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font reference that best matches the given font descriptor.

## Declaration

```swift
func CTFontCreateWithFontDescriptor(_ descriptor: CTFontDescriptor, _ size: CGFloat, _ matrix: UnsafePointer<CGAffineTransform>?) -> CTFont
```

## Parameters

- `descriptor`: A font descriptor containing attributes that specify the requested font.
- `size`: The point size for the font reference. If `0.0` is specified, the default font size of `12.0` is used.  This parameter is optional.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL` is specified, the identity matrix is used.  This parameter is optional.

<a id="return-value"></a>

## Return Value

A CTFontRef that best matches the attributes provided with the font descriptor.

<a id="Discussion"></a>

## Discussion

The `size` and `matrix` parameters override any specified in the font descriptor unless they are unspecified (`0.0` for `size` and `NULL` for `matrix`). A best match font is always returned, and default values are used for any unspecified parameters.

## See Also

### Creating Fonts

- [CTFontCreateWithName(\_:\_:\_:)](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions(\_:\_:\_:\_:)](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptorAndOptions(\_:\_:\_:\_:)](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage(\_:\_:\_:)](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes(\_:\_:\_:\_:)](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits(\_:\_:\_:\_:\_:)](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateCopyWithFamily(\_:\_:\_:\_:)](ctfontcreatecopywithfamily%28________%29.md): Returns a new font in the specified family based on the traits of the original font.
- [CTFontCreateForString(\_:\_:\_:)](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
- [CTFontCreateForStringWithLanguage(\_:\_:\_:\_:)](ctfontcreateforstringwithlanguage%28________%29.md): Returns a font reference that most accurately maps the string range based on the current font and language.

# CTFontCreateWithFontDescriptor (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font reference that best matches the given font descriptor.

## Declaration

```objectivec
extern CTFontRefCTFontCreateWithFontDescriptor(CTFontDescriptorRef descriptor, CGFloat size, const CGAffineTransform *matrix);
```

## Parameters

- `descriptor`: A font descriptor containing attributes that specify the requested font.
- `size`: The point size for the font reference. If `0.0` is specified, the default font size of `12.0` is used.  This parameter is optional.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL` is specified, the identity matrix is used.  This parameter is optional.

<a id="return-value"></a>

## Return Value

A CTFontRef that best matches the attributes provided with the font descriptor.

<a id="Discussion"></a>

## Discussion

The `size` and `matrix` parameters override any specified in the font descriptor unless they are unspecified (`0.0` for `size` and `NULL` for `matrix`). A best match font is always returned, and default values are used for any unspecified parameters.

## See Also

### Creating Fonts

- [CTFontCreateWithName](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptorAndOptions](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateCopyWithFamily](ctfontcreatecopywithfamily%28________%29.md): Returns a new font in the specified family based on the traits of the original font.
- [CTFontCreateForString](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
- [CTFontCreateForStringWithLanguage](ctfontcreateforstringwithlanguage%28________%29.md): Returns a font reference that most accurately maps the string range based on the current font and language.
