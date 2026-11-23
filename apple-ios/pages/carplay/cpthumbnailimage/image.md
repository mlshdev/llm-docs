> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The main image to display.

## Declaration

```swift
var image: UIImage { get set }
```

<a id="discussion"></a>

## Discussion

This method resizes the image to fit the expected size of row elements. If you assign a new image to this property, make sure the image’s width/height aspect ratio is in the range `0.5` to `1.8`. If the aspect ratio is outside those bounds, the method changes the aspect ratio to the nearest boundary before resizing.

## See Also

### Getting the thumbnail content

- [imageOverlay](imageoverlay.md): An overlay with a custom image or text badge.
- [sportsOverlay](sportsoverlay.md): An overlay with sporting event details, including the teams and current score.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The main image to display.

## Declaration

```objectivec
@property (nonatomic, strong) UIImage * image;
```

<a id="discussion"></a>

## Discussion

This method resizes the image to fit the expected size of row elements. If you assign a new image to this property, make sure the image’s width/height aspect ratio is in the range `0.5` to `1.8`. If the aspect ratio is outside those bounds, the method changes the aspect ratio to the nearest boundary before resizing.

## See Also

### Getting the thumbnail content

- [imageOverlay](imageoverlay.md): An overlay with a custom image or text badge.
- [sportsOverlay](sportsoverlay.md): An overlay with sporting event details, including the teams and current score.
