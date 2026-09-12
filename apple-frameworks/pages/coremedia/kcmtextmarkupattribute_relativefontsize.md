> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_relativefontsize](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_relativefontsize)

# kCMTextMarkupAttribute_RelativeFontSize (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A font size as a percentage of the current default font size.

## Declaration

```swift
let kCMTextMarkupAttribute_RelativeFontSize: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a non-negative `CFNumber`. This is a number holding a percentage of the size of the calculated default font size. A value of `120` indicates 20% larger than the default font size. A value of `80` indicates 80% of the default font size. The default value of `100` indicates no size difference.

## See Also

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.

# kCMTextMarkupAttribute_RelativeFontSize (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A font size as a percentage of the current default font size.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_RelativeFontSize;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a non-negative `CFNumber`. This is a number holding a percentage of the size of the calculated default font size. A value of `120` indicates 20% larger than the default font size. A value of `80` indicates 80% of the default font size. The default value of `100` indicates no size difference.

## See Also

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.
