> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage/init(image:imageoverlay:sportsoverlay:)

# init(image:imageOverlay:sportsOverlay:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a thumbnail with an image object and optional overlays.

## Declaration

```swift
init(image: UIImage, imageOverlay: CPImageOverlay?, sportsOverlay: CPSportsOverlay?)
```

## Parameters

- `image`: The image to display. Get the maximum image size from the [maximumImageSize(forAspectRatio:)](maximumimagesize%28foraspectratio_%29.md) method. If you specify a larger or smaller image, this initializer scales the image to the maximum size. When scaling the image, the method retains the image’s width/height aspect ratio if that ratio is greater than `0.5` and less than `1.8`. If the image’s aspect ratio is outside those bounds, the method changes the aspect ratio to the nearest boundary before rescaling.
- `imageOverlay`: An overlay to display on top of the thumbnail image. Specify `nil` to omit this overlay.
- `sportsOverlay`: A sports overlay to display on top of the thumbnail image. Specify `nil` to omit this overlay.

<a id="return-value"></a>

## Return Value

An initialized thumbnail image with optional overlays.

<a id="discussion"></a>

## Discussion

You can combine an image and sports overlay on the same thumbnail image. Sports overlays have a fixed placement for content, but you can customize the placement of an image overlay.

## See Also

### Creating a thumbnail image

- [init(image:)](init%28image_%29.md): Creates a thumbnail with an image object.
- [init(coder:)](init%28coder_%29.md)

# initWithImage:imageOverlay:sportsOverlay: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a thumbnail with an image object and optional overlays.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image imageOverlay:(CPImageOverlay *) imageOverlay sportsOverlay:(CPSportsOverlay *) sportsOverlay;
```

## Parameters

- `image`: The image to display. Get the maximum image size from the [maximumImageSizeForAspectRatio:](maximumimagesize%28foraspectratio_%29.md) method. If you specify a larger or smaller image, this initializer scales the image to the maximum size. When scaling the image, the method retains the image’s width/height aspect ratio if that ratio is greater than `0.5` and less than `1.8`. If the image’s aspect ratio is outside those bounds, the method changes the aspect ratio to the nearest boundary before rescaling.
- `imageOverlay`: An overlay to display on top of the thumbnail image. Specify `nil` to omit this overlay.
- `sportsOverlay`: A sports overlay to display on top of the thumbnail image. Specify `nil` to omit this overlay.

<a id="return-value"></a>

## Return Value

An initialized thumbnail image with optional overlays.

<a id="discussion"></a>

## Discussion

You can combine an image and sports overlay on the same thumbnail image. Sports overlays have a fixed placement for content, but you can customize the placement of an image overlay.

## See Also

### Creating a thumbnail image

- [initWithImage:](init%28image_%29.md): Creates a thumbnail with an image object.
