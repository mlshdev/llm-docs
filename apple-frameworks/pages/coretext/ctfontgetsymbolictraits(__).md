> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetsymbolictraits(_:)](https://developer.apple.com/documentation/coretext/ctfontgetsymbolictraits(_:))

# CTFontGetSymbolicTraits(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the symbolic traits of the given font.

## Declaration

```swift
func CTFontGetSymbolicTraits(_ font: CTFont) -> CTFontSymbolicTraits
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The symbolic traits of the font. This is equivalent to the `kCTFontSymbolicTrait` value of the traits dictionary.

<a id="Discussion"></a>

## Discussion

See the Constants section of [CTFontDescriptor](ctfontdescriptor.md) for a definition of the font traits.

## See Also

### Getting Font Data

- [CTFontCopyFontDescriptor(\_:)](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontCopyAttribute(\_:\_:)](ctfontcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute of the given font.
- [CTFontGetSize(\_:)](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix(\_:)](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontCopyTraits(\_:)](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
- [CTFontCopyDefaultCascadeListForLanguages(\_:\_:)](ctfontcopydefaultcascadelistforlanguages%28____%29.md): Retrieves an ordered list of font substitution preferences.

# CTFontGetSymbolicTraits (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the symbolic traits of the given font.

## Declaration

```objectivec
extern CTFontSymbolicTraits CTFontGetSymbolicTraits(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The symbolic traits of the font. This is equivalent to the `kCTFontSymbolicTrait` value of the traits dictionary.

<a id="Discussion"></a>

## Discussion

See the Constants section of [CTFontDescriptorRef](ctfontdescriptor.md) for a definition of the font traits.

## See Also

### Getting Font Data

- [CTFontCopyFontDescriptor](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontCopyAttribute](ctfontcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute of the given font.
- [CTFontGetSize](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontCopyTraits](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
- [CTFontCopyDefaultCascadeListForLanguages](ctfontcopydefaultcascadelistforlanguages%28____%29.md): Retrieves an ordered list of font substitution preferences.
