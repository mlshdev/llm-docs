> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/animatedimage(with:duration:)](https://developer.apple.com/documentation/uikit/uiimage/animatedimage(with:duration:))

# animatedImage(with:duration:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image from an existing set of images.

## Declaration

```swift
class func animatedImage(with images: [UIImage], duration: TimeInterval) -> UIImage?
```

## Parameters

- `images`: An array of [UIImage](../uiimage.md) objects.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new image object.

<a id="Discussion"></a>

## Discussion

All images included in the animated image should share the same size and scale.

## See Also

### Creating animated images

- [animatedImageNamed(\_:duration:)](animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedResizableImageNamed(\_:capInsets:duration:)](animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
- [animatedResizableImageNamed(\_:capInsets:resizingMode:duration:)](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.

# animatedImageWithImages:duration: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image from an existing set of images.

## Declaration

```objectivec
+ (UIImage *) animatedImageWithImages:(NSArray<UIImage *> *) images duration:(NSTimeInterval) duration;
```

## Parameters

- `images`: An array of [UIImage](../uiimage.md) objects.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new image object.

<a id="Discussion"></a>

## Discussion

All images included in the animated image should share the same size and scale.

## See Also

### Creating animated images

- [animatedImageNamed:duration:](animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedResizableImageNamed:capInsets:duration:](animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
- [animatedResizableImageNamed:capInsets:resizingMode:duration:](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.
