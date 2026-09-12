> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyattribute(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopyattribute(_:_:))

# CTFontCopyAttribute(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with an arbitrary attribute of the given font.

## Declaration

```swift
func CTFontCopyAttribute(_ font: CTFont, _ attribute: CFString) -> CFTypeRef?
```

## Parameters

- `font`: The font reference.
- `attribute`: The requested attribute.

<a id="return-value"></a>

## Return Value

A retained reference to an arbitrary attribute or `NULL` if the requested attribute is not present.

<a id="Discussion"></a>

## Discussion

Refer to the attribute definitions documentation for information as to how each attribute is packaged as a `CFType`.

## See Also

### Getting Font Data

- [CTFontCopyFontDescriptor(\_:)](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontGetSize(\_:)](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix(\_:)](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontGetSymbolicTraits(\_:)](ctfontgetsymbolictraits%28__%29.md): Returns the symbolic traits of the given font.
- [CTFontCopyTraits(\_:)](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
- [CTFontCopyDefaultCascadeListForLanguages(\_:\_:)](ctfontcopydefaultcascadelistforlanguages%28____%29.md): Retrieves an ordered list of font substitution preferences.

# CTFontCopyAttribute (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with an arbitrary attribute of the given font.

## Declaration

```objectivec
extern CFTypeRefCTFontCopyAttribute(CTFontRef font, CFStringRef attribute);
```

## Parameters

- `font`: The font reference.
- `attribute`: The requested attribute.

<a id="return-value"></a>

## Return Value

A retained reference to an arbitrary attribute or `NULL` if the requested attribute is not present.

<a id="Discussion"></a>

## Discussion

Refer to the attribute definitions documentation for information as to how each attribute is packaged as a `CFType`.

## See Also

### Getting Font Data

- [CTFontCopyFontDescriptor](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontGetSize](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontGetSymbolicTraits](ctfontgetsymbolictraits%28__%29.md): Returns the symbolic traits of the given font.
- [CTFontCopyTraits](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
- [CTFontCopyDefaultCascadeListForLanguages](ctfontcopydefaultcascadelistforlanguages%28____%29.md): Retrieves an ordered list of font substitution preferences.
