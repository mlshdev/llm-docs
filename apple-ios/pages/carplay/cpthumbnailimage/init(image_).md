> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage/init(image:)

# init(image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a thumbnail with an image object.

## Declaration

```swift
init(image: UIImage)
```

## Parameters

- `image`: The image to display. Get the maximum image size from the [maximumImageSize(forAspectRatio:)](maximumimagesize%28foraspectratio_%29.md) method. If you specify a larger or smaller image, this initializer scales the image to the maximum size. When scaling the image, the method retains the image’s width/height aspect ratio if that ratio is greater than `0.5` and less than `1.8`. If the image’s aspect ratio is outside those bounds, the method changes the aspect ratio to the nearest boundary before rescaling.

<a id="return-value"></a>

## Return Value

An initialized thumbnail image without any overlays.

## See Also

### Creating a thumbnail image

- [init(image:imageOverlay:sportsOverlay:)](init%28image_imageoverlay_sportsoverlay_%29.md): Creates a thumbnail with an image object and optional overlays.
- [init(coder:)](init%28coder_%29.md)

# initWithImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a thumbnail with an image object.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image to display. Get the maximum image size from the [maximumImageSizeForAspectRatio:](maximumimagesize%28foraspectratio_%29.md) method. If you specify a larger or smaller image, this initializer scales the image to the maximum size. When scaling the image, the method retains the image’s width/height aspect ratio if that ratio is greater than `0.5` and less than `1.8`. If the image’s aspect ratio is outside those bounds, the method changes the aspect ratio to the nearest boundary before rescaling.

<a id="return-value"></a>

## Return Value

An initialized thumbnail image without any overlays.

## See Also

### Creating a thumbnail image

- [initWithImage:imageOverlay:sportsOverlay:](init%28image_imageoverlay_sportsoverlay_%29.md): Creates a thumbnail with an image object and optional overlays.
