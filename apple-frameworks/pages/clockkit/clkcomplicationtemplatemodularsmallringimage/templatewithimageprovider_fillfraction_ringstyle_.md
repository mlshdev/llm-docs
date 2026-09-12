> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallringimage/templatewithimageprovider:fillfraction:ringstyle:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallringimage/templatewithimageprovider:fillfraction:ringstyle:)

# templateWithImageProvider:fillFraction:ringStyle:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template from the provided image, fill fraction, and ring style.

## Declaration

```objectivec
+ (instancetype) templateWithImageProvider:(CLKImageProvider *) imageProvider fillFraction:(float) fillFraction ringStyle:(CLKComplicationRingStyle) ringStyle;
```

## Parameters

- `imageProvider`: The image provider for the center image. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).
- `fillFraction`: A value between `0.0` and `1.0` that indicates how much of the ring fills.
- `ringStyle`: The ring’s style. For a complete list of styles, see [CLKComplicationRingStyle](../clkcomplicationringstyle.md).

## See Also

### Creating the Template

- [initWithImageProvider:fillFraction:ringStyle:](init%28imageprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided image, fill fraction, and ring style.
