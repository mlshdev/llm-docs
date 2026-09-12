> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/animatedresizableimagenamed(_:capinsets:duration:)](https://developer.apple.com/documentation/uikit/uiimage/animatedresizableimagenamed(_:capinsets:duration:))

# animatedResizableImageNamed(\_:capInsets:duration:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image with end caps.

## Declaration

```swift
class func animatedResizableImageNamed(_ name: String, capInsets: UIEdgeInsets, duration: TimeInterval) -> UIImage?
```

## Parameters

- `name`: The full or partial path to the file (sans suffix).
- `capInsets`: The values to use for the cap insets.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new image object.

<a id="Discussion"></a>

## Discussion

This method loads a series of files by appending a series of numbers to the base file name provided in the `name` parameter. For example, if the `name` parameter had ‘image’ as its contents, this method would attempt to load images from files with the names ‘image0’, ‘image1’ and so on all the way up to ‘image1024’. All images included in the animated image should share the same size and scale.

Each frame in the animation follows the rules for resizable images created by the [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md) method.

## See Also

### Related Documentation

- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.

### Creating animated images

- [animatedImageNamed(\_:duration:)](animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedImage(with:duration:)](animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed(\_:capInsets:resizingMode:duration:)](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.

# animatedResizableImageNamed:capInsets:duration: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image with end caps.

## Declaration

```objectivec
+ (UIImage *) animatedResizableImageNamed:(NSString *) name capInsets:(UIEdgeInsets) capInsets duration:(NSTimeInterval) duration;
```

## Parameters

- `name`: The full or partial path to the file (sans suffix).
- `capInsets`: The values to use for the cap insets.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new image object.

<a id="Discussion"></a>

## Discussion

This method loads a series of files by appending a series of numbers to the base file name provided in the `name` parameter. For example, if the `name` parameter had ‘image’ as its contents, this method would attempt to load images from files with the names ‘image0’, ‘image1’ and so on all the way up to ‘image1024’. All images included in the animated image should share the same size and scale.

Each frame in the animation follows the rules for resizable images created by the [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md) method.

## See Also

### Related Documentation

- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.

### Creating animated images

- [animatedImageNamed:duration:](animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedImageWithImages:duration:](animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed:capInsets:resizingMode:duration:](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.
