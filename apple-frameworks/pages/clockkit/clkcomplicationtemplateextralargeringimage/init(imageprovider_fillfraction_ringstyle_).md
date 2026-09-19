> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargeringimage/init(imageprovider:fillfraction:ringstyle:)

# init(imageProvider:fillFraction:ringStyle:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template from the provided image, fill fraction, and ring style.

## Declaration

```swift
init(imageProvider: CLKImageProvider, fillFraction: Float, ringStyle: CLKComplicationRingStyle)
```

## Parameters

- `imageProvider`: The image provider for the main image. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).
- `fillFraction`: A value between `0.0` and `1.0` that indicates how much of the ring fills.
- `ringStyle`: The ring’s style. For a complete list of styles, see [CLKComplicationRingStyle](../clkcomplicationringstyle.md).

# initWithImageProvider:fillFraction:ringStyle: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template from the provided image, fill fraction, and ring style.

## Declaration

```objectivec
- (instancetype) initWithImageProvider:(CLKImageProvider *) imageProvider fillFraction:(float) fillFraction ringStyle:(CLKComplicationRingStyle) ringStyle;
```

## Parameters

- `imageProvider`: The image provider for the main image. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).
- `fillFraction`: A value between `0.0` and `1.0` that indicates how much of the ring fills.
- `ringStyle`: The ring’s style. For a complete list of styles, see [CLKComplicationRingStyle](../clkcomplicationringstyle.md).

## See Also

### Creating the Template

- [templateWithImageProvider:fillFraction:ringStyle:](templatewithimageprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided image, fill fraction, and ring style.
