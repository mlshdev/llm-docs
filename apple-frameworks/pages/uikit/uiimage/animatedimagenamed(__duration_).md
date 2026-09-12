> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/animatedimagenamed(_:duration:)](https://developer.apple.com/documentation/uikit/uiimage/animatedimagenamed(_:duration:))

# animatedImageNamed(\_:duration:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image.

## Declaration

```swift
class func animatedImageNamed(_ name: String, duration: TimeInterval) -> UIImage?
```

## Parameters

- `name`: The full or partial path to the file (sans suffix).
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new image object.

<a id="Discussion"></a>

## Discussion

This method loads a series of files by appending a series of numbers to the base file name provided in the `name` parameter. For example, if the `name` parameter had ‘image’ as its contents, this method would attempt to load images from files with the names ‘image0’, ‘image1’ and so on all the way up to ‘image1024’. All images included in the animated image should share the same size and scale.

## See Also

### Creating animated images

- [animatedImage(with:duration:)](animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed(\_:capInsets:duration:)](animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
- [animatedResizableImageNamed(\_:capInsets:resizingMode:duration:)](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.

# animatedImageNamed:duration: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an animated image.

## Declaration

```objectivec
+ (UIImage *) animatedImageNamed:(NSString *) name duration:(NSTimeInterval) duration;
```

## Parameters

- `name`: The full or partial path to the file (sans suffix).
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new image object.

<a id="Discussion"></a>

## Discussion

This method loads a series of files by appending a series of numbers to the base file name provided in the `name` parameter. For example, if the `name` parameter had ‘image’ as its contents, this method would attempt to load images from files with the names ‘image0’, ‘image1’ and so on all the way up to ‘image1024’. All images included in the animated image should share the same size and scale.

## See Also

### Creating animated images

- [animatedImageWithImages:duration:](animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed:capInsets:duration:](animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
- [animatedResizableImageNamed:capInsets:resizingMode:duration:](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.
