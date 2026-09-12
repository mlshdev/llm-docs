> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallstackimage/templatewithline1imageprovider:line2textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallstackimage/templatewithline1imageprovider:line2textprovider:)

# templateWithLine1ImageProvider:line2TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template from the provided image and text.

## Declaration

```objectivec
+ (instancetype) templateWithLine1ImageProvider:(CLKImageProvider *) line1ImageProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1ImageProvider`: The image provider for the main image. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).
- `line2TextProvider`: A text provider for the text below the image. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a new template from the provided image and text.
