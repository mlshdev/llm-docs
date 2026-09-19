> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallsimpleimage/templatewithimageprovider:

# templateWithImageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a new template from the provided image.

## Declaration

```objectivec
+ (instancetype) templateWithImageProvider:(CLKImageProvider *) imageProvider;
```

## Parameters

- `imageProvider`: The image provider for an image that fills the template. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).

## See Also

### Creating the Template

- [initWithImageProvider:](init%28imageprovider_%29.md): Deprecated. Creates a new template from the provided image.
