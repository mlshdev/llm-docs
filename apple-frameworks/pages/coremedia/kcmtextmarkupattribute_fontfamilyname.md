> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_fontfamilyname](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_fontfamilyname)

# kCMTextMarkupAttribute_FontFamilyName (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A name of a font family.

## Declaration

```swift
let kCMTextMarkupAttribute_FontFamilyName: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFString` that holds the family name of an installed font (for example, “Helvetica”) that the system uses to render and/or measure text.

When the system specifies legible output, an attributed string has at most one of [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md) or [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md) associated with each character.

## See Also

### Fonts

- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.

# kCMTextMarkupAttribute_FontFamilyName (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A name of a font family.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_FontFamilyName;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFString` that holds the family name of an installed font (for example, “Helvetica”) that the system uses to render and/or measure text.

When the system specifies legible output, an attributed string has at most one of [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md) or [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md) associated with each character.

## See Also

### Fonts

- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.
