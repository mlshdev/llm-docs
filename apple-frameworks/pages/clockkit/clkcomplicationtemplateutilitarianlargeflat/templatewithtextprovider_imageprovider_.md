> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateutilitarianlargeflat/templatewithtextprovider:imageprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitarianlargeflat/templatewithtextprovider:imageprovider:)

# templateWithTextProvider:imageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has a single row with an image and a long line of text.

## Declaration

```objectivec
+ (instancetype) templateWithTextProvider:(CLKTextProvider *) textProvider imageProvider:(CLKImageProvider *) imageProvider;
```

## Parameters

- `textProvider`: The text provider for the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `imageProvider`: The image provider for the leading image. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).

## See Also

### Creating the Template

- [initWithTextProvider:](init%28textprovider_%29.md): Deprecated. Creates a new template that has a long line of text.
- [initWithTextProvider:imageProvider:](init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a long line of text.
- [templateWithTextProvider:](templatewithtextprovider_.md): Deprecated. Returns a new template that has a long line of text.
