> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargesimpleimage/init(imageprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargesimpleimage/init(imageprovider:))

# init(imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template from the provided image.

## Declaration

```swift
init(imageProvider: CLKImageProvider)
```

## Parameters

- `imageProvider`: The image provider for an image that fills the template. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).

# initWithImageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template from the provided image.

## Declaration

```objectivec
- (instancetype) initWithImageProvider:(CLKImageProvider *) imageProvider;
```

## Parameters

- `imageProvider`: The image provider for an image that fills the template. The system renders the image as a tinted template image, a bitmap image where only the opacity of the image matters. For more information, see [Providing images for different appearances](../../uikit/providing-images-for-different-appearances.md).

## See Also

### Creating the Template

- [templateWithImageProvider:](templatewithimageprovider_.md): Deprecated. Returns a new template from the provided image.
