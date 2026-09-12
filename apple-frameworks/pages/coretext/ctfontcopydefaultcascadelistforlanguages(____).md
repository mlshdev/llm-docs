> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopydefaultcascadelistforlanguages(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopydefaultcascadelistforlanguages(_:_:))

# CTFontCopyDefaultCascadeListForLanguages(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves an ordered list of font substitution preferences.

## Declaration

```swift
func CTFontCopyDefaultCascadeListForLanguages(_ font: CTFont, _ languagePrefList: CFArray?) -> CFArray?
```

## Parameters

- `font`: The font reference.
- `languagePrefList`: The language preference list, an ordered array of [CFString](../corefoundation/cfstring.md)s of ISO language codes.

<a id="return-value"></a>

## Return Value

An ordered list of [CTFontDescriptor](ctfontdescriptor.md)s for font fallback according to the given language preferences.

<a id="Discussion"></a>

## Discussion

When the original `font` used for text layout and rendering does not support a certain Unicode character from the provided text, the system follows this list to pick a fallback font that includes the character.

The font alternatives in the cascade list match the original font’s style, weight, and width.

## See Also

### Getting Font Data

- [CTFontCopyFontDescriptor(\_:)](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontCopyAttribute(\_:\_:)](ctfontcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute of the given font.
- [CTFontGetSize(\_:)](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix(\_:)](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontGetSymbolicTraits(\_:)](ctfontgetsymbolictraits%28__%29.md): Returns the symbolic traits of the given font.
- [CTFontCopyTraits(\_:)](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.

# CTFontCopyDefaultCascadeListForLanguages (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves an ordered list of font substitution preferences.

## Declaration

```objectivec
extern CFArrayRefCTFontCopyDefaultCascadeListForLanguages(CTFontRef font, CFArrayRef languagePrefList);
```

## Parameters

- `font`: The font reference.
- `languagePrefList`: The language preference list, an ordered array of [CFStringRef](../corefoundation/cfstring.md)s of ISO language codes.

<a id="return-value"></a>

## Return Value

An ordered list of [CTFontDescriptorRef](ctfontdescriptor.md)s for font fallback according to the given language preferences.

<a id="Discussion"></a>

## Discussion

When the original `font` used for text layout and rendering does not support a certain Unicode character from the provided text, the system follows this list to pick a fallback font that includes the character.

The font alternatives in the cascade list match the original font’s style, weight, and width.

## See Also

### Getting Font Data

- [CTFontCopyFontDescriptor](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontCopyAttribute](ctfontcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute of the given font.
- [CTFontGetSize](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontGetSymbolicTraits](ctfontgetsymbolictraits%28__%29.md): Returns the symbolic traits of the given font.
- [CTFontCopyTraits](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
