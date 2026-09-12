> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_characterbackgroundcolorargb](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_characterbackgroundcolorargb)

# kCMTextMarkupAttribute_CharacterBackgroundColorARGB (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A background color for individual text characters.

## Declaration

```swift
let kCMTextMarkupAttribute_CharacterBackgroundColorARGB: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFArray` of four `CFNumber`s representing alpha, red, green, and blue fields with values between `0.0` and `1.0`. The system interprets the red, green, and blue components in the sRGB color space. The alpha indicates the opacity from `0.0` for transparent to `1.0` for 100 percent opaque.

## See Also

### Colors

- [kCMTextMarkupAttribute_ForegroundColorARGB](kcmtextmarkupattribute_foregroundcolorargb.md): A foreground color for the text.
- [kCMTextMarkupAttribute_BackgroundColorARGB](kcmtextmarkupattribute_backgroundcolorargb.md): A background color for the text.

# kCMTextMarkupAttribute_CharacterBackgroundColorARGB (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A background color for individual text characters.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_CharacterBackgroundColorARGB;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a `CFArray` of four `CFNumber`s representing alpha, red, green, and blue fields with values between `0.0` and `1.0`. The system interprets the red, green, and blue components in the sRGB color space. The alpha indicates the opacity from `0.0` for transparent to `1.0` for 100 percent opaque.

## See Also

### Colors

- [kCMTextMarkupAttribute_ForegroundColorARGB](kcmtextmarkupattribute_foregroundcolorargb.md): A foreground color for the text.
- [kCMTextMarkupAttribute_BackgroundColorARGB](kcmtextmarkupattribute_backgroundcolorargb.md): A background color for the text.
