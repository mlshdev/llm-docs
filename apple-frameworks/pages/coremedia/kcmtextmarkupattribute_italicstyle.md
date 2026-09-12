> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_italicstyle](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_italicstyle)

# kCMTextMarkupAttribute_ItalicStyle (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An italic font style.

## Declaration

```swift
let kCMTextMarkupAttribute_ItalicStyle: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFBoolean`. The default is `kCFBooleanFalse`. If this attribute is `kCFBooleanTrue`, the system renders the text with an italic style in addition to other styles you use.

## See Also

### Styles

- [kCMTextMarkupAttribute_BoldStyle](kcmtextmarkupattribute_boldstyle.md): A bold font style.
- [kCMTextMarkupAttribute_UnderlineStyle](kcmtextmarkupattribute_underlinestyle.md): An underline font style.
- [kCMTextMarkupAttribute_CharacterEdgeStyle](kcmtextmarkupattribute_characteredgestyle.md): A style for character edges.

# kCMTextMarkupAttribute_ItalicStyle (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An italic font style.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_ItalicStyle;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFBoolean`. The default is `kCFBooleanFalse`. If this attribute is `kCFBooleanTrue`, the system renders the text with an italic style in addition to other styles you use.

## See Also

### Styles

- [kCMTextMarkupAttribute_BoldStyle](kcmtextmarkupattribute_boldstyle.md): A bold font style.
- [kCMTextMarkupAttribute_UnderlineStyle](kcmtextmarkupattribute_underlinestyle.md): An underline font style.
- [kCMTextMarkupAttribute_CharacterEdgeStyle](kcmtextmarkupattribute_characteredgestyle.md): A style for character edges.
