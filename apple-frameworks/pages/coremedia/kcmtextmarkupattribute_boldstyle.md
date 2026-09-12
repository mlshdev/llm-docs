> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_boldstyle](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_boldstyle)

# kCMTextMarkupAttribute_BoldStyle (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A bold font style.

## Declaration

```swift
let kCMTextMarkupAttribute_BoldStyle: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFBoolean`. The default is `kCFBooleanFalse`. If this attribute is `kCFBooleanTrue`, the system renders the text with a bold style in addition to other styles you use.

## See Also

### Styles

- [kCMTextMarkupAttribute_ItalicStyle](kcmtextmarkupattribute_italicstyle.md): An italic font style.
- [kCMTextMarkupAttribute_UnderlineStyle](kcmtextmarkupattribute_underlinestyle.md): An underline font style.
- [kCMTextMarkupAttribute_CharacterEdgeStyle](kcmtextmarkupattribute_characteredgestyle.md): A style for character edges.

# kCMTextMarkupAttribute_BoldStyle (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A bold font style.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_BoldStyle;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFBoolean`. The default is `kCFBooleanFalse`. If this attribute is `kCFBooleanTrue`, the system renders the text with a bold style in addition to other styles you use.

## See Also

### Styles

- [kCMTextMarkupAttribute_ItalicStyle](kcmtextmarkupattribute_italicstyle.md): An italic font style.
- [kCMTextMarkupAttribute_UnderlineStyle](kcmtextmarkupattribute_underlinestyle.md): An underline font style.
- [kCMTextMarkupAttribute_CharacterEdgeStyle](kcmtextmarkupattribute_characteredgestyle.md): A style for character edges.
