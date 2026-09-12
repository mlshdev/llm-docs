> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight)

# kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A base font size as a percentage of the video height.

## Declaration

```swift
let kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a non-negative `CFNumber`. This is a number holding a percentage of the height of the video frame. For example, a value of `5` indicates that the base font size should be 5% of the height of the video.

## See Also

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.

# kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A base font size as a percentage of the video height.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a non-negative `CFNumber`. This is a number holding a percentage of the height of the video frame. For example, a value of `5` indicates that the base font size should be 5% of the height of the video.

## See Also

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.
