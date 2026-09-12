> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/animatedresizableimagenamed(_:capinsets:resizingmode:duration:)](https://developer.apple.com/documentation/uikit/uiimage/animatedresizableimagenamed(_:capinsets:resizingmode:duration:))

# animatedResizableImageNamed(\_:capInsets:resizingMode:duration:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image with end caps and a specific resizing mode.

## Declaration

```swift
class func animatedResizableImageNamed(_ name: String, capInsets: UIEdgeInsets, resizingMode: UIImage.ResizingMode, duration: TimeInterval) -> UIImage?
```

## Parameters

- `name`: The full or partial path to the file (sans suffix).
- `capInsets`: The values to use for the cap insets.
- `resizingMode`: The mode with which the interior of the image is resized.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new animated image object with the specified cap insets and resizing mode.

<a id="Discussion"></a>

## Discussion

This method is exactly the same as its counterpart [animatedResizableImageNamed(\_:capInsets:duration:)](animatedresizableimagenamed%28__capinsets_duration_%29.md) except that the resizing mode of the new image object can be explicitly declared. Since the resizing mode of an image is [UIImage.ResizingMode.tile](resizingmode-swift.enum/tile.md) by default, this method should only be used in place of its counterpart to create an animated image that needs to be resized with the [UIImage.ResizingMode.stretch](resizingmode-swift.enum/stretch.md) resizing mode.

## See Also

### Related Documentation

- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.

### Creating animated images

- [animatedImageNamed(\_:duration:)](animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedImage(with:duration:)](animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed(\_:capInsets:duration:)](animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.

# animatedResizableImageNamed:capInsets:resizingMode:duration: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image with end caps and a specific resizing mode.

## Declaration

```objectivec
+ (UIImage *) animatedResizableImageNamed:(NSString *) name capInsets:(UIEdgeInsets) capInsets resizingMode:(UIImageResizingMode) resizingMode duration:(NSTimeInterval) duration;
```

## Parameters

- `name`: The full or partial path to the file (sans suffix).
- `capInsets`: The values to use for the cap insets.
- `resizingMode`: The mode with which the interior of the image is resized.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new animated image object with the specified cap insets and resizing mode.

<a id="Discussion"></a>

## Discussion

This method is exactly the same as its counterpart [animatedResizableImageNamed:capInsets:duration:](animatedresizableimagenamed%28__capinsets_duration_%29.md) except that the resizing mode of the new image object can be explicitly declared. Since the resizing mode of an image is [UIImageResizingModeTile](resizingmode-swift.enum/tile.md) by default, this method should only be used in place of its counterpart to create an animated image that needs to be resized with the [UIImageResizingModeStretch](resizingmode-swift.enum/stretch.md) resizing mode.

## See Also

### Related Documentation

- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.

### Creating animated images

- [animatedImageNamed:duration:](animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedImageWithImages:duration:](animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed:capInsets:duration:](animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
