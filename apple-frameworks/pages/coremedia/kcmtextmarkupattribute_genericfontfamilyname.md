> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_genericfontfamilyname](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_genericfontfamilyname)

# kCMTextMarkupAttribute_GenericFontFamilyName (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A generic font family name identifier.

## Declaration

```swift
let kCMTextMarkupAttribute_GenericFontFamilyName: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be one of the constants listed below. You need to map generic fonts to the family name of an installed font before rendering and/or measuring text (see [Media Accessibility](../mediaaccessibility.md)).

When the system specifies legible output, an attributed string has at most one of [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md) or [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md) associated with each character.

## Topics

### Font Names

- [kCMTextMarkupGenericFontName_Default](kcmtextmarkupgenericfontname_default.md): The default font.
- [kCMTextMarkupGenericFontName_Serif](kcmtextmarkupgenericfontname_serif.md): A font with serifs.
- [kCMTextMarkupGenericFontName_SansSerif](kcmtextmarkupgenericfontname_sansserif.md): A font without serifs.
- [kCMTextMarkupGenericFontName_Monospace](kcmtextmarkupgenericfontname_monospace.md): A monospaced font with or without serifs.
- [kCMTextMarkupGenericFontName_MonospaceSerif](kcmtextmarkupgenericfontname_monospaceserif.md): A monospaced font with serifs.
- [kCMTextMarkupGenericFontName_MonospaceSansSerif](kcmtextmarkupgenericfontname_monospacesansserif.md): A monospaced font without serifs.
- [kCMTextMarkupGenericFontName_ProportionalSerif](kcmtextmarkupgenericfontname_proportionalserif.md): A proportional font with serifs.
- [kCMTextMarkupGenericFontName_ProportionalSansSerif](kcmtextmarkupgenericfontname_proportionalsansserif.md): A proportional font without serifs.
- [kCMTextMarkupGenericFontName_SmallCapital](kcmtextmarkupgenericfontname_smallcapital.md): A font with lowercase letters set as small capital letters.
- [kCMTextMarkupGenericFontName_Casual](kcmtextmarkupgenericfontname_casual.md): A casual font.
- [kCMTextMarkupGenericFontName_Cursive](kcmtextmarkupgenericfontname_cursive.md): A cursive font.
- [kCMTextMarkupGenericFontName_Fantasy](kcmtextmarkupgenericfontname_fantasy.md): A fantasy font.

## See Also

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.

# kCMTextMarkupAttribute_GenericFontFamilyName (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A generic font family name identifier.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_GenericFontFamilyName;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be one of the constants listed below. You need to map generic fonts to the family name of an installed font before rendering and/or measuring text (see [Media Accessibility](../mediaaccessibility.md)).

When the system specifies legible output, an attributed string has at most one of [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md) or [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md) associated with each character.

## Topics

### Font Names

- [kCMTextMarkupGenericFontName_Default](kcmtextmarkupgenericfontname_default.md): The default font.
- [kCMTextMarkupGenericFontName_Serif](kcmtextmarkupgenericfontname_serif.md): A font with serifs.
- [kCMTextMarkupGenericFontName_SansSerif](kcmtextmarkupgenericfontname_sansserif.md): A font without serifs.
- [kCMTextMarkupGenericFontName_Monospace](kcmtextmarkupgenericfontname_monospace.md): A monospaced font with or without serifs.
- [kCMTextMarkupGenericFontName_MonospaceSerif](kcmtextmarkupgenericfontname_monospaceserif.md): A monospaced font with serifs.
- [kCMTextMarkupGenericFontName_MonospaceSansSerif](kcmtextmarkupgenericfontname_monospacesansserif.md): A monospaced font without serifs.
- [kCMTextMarkupGenericFontName_ProportionalSerif](kcmtextmarkupgenericfontname_proportionalserif.md): A proportional font with serifs.
- [kCMTextMarkupGenericFontName_ProportionalSansSerif](kcmtextmarkupgenericfontname_proportionalsansserif.md): A proportional font without serifs.
- [kCMTextMarkupGenericFontName_SmallCapital](kcmtextmarkupgenericfontname_smallcapital.md): A font with lowercase letters set as small capital letters.
- [kCMTextMarkupGenericFontName_Casual](kcmtextmarkupgenericfontname_casual.md): A casual font.
- [kCMTextMarkupGenericFontName_Cursive](kcmtextmarkupgenericfontname_cursive.md): A cursive font.
- [kCMTextMarkupGenericFontName_Fantasy](kcmtextmarkupgenericfontname_fantasy.md): A fantasy font.

## See Also

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.
