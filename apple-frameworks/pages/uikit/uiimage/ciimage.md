> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/ciimage](https://developer.apple.com/documentation/uikit/uiimage/ciimage)

# ciImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The underlying Core Image data.

## Declaration

```swift
var ciImage: CIImage? { get }
```

<a id="Discussion"></a>

## Discussion

If the `UIImage` object was initialized using a [CGImage](../../coregraphics/cgimage.md), the value of the property is `nil`.

## See Also

### Getting the image data

- [cgImage](cgimage.md): The underlying Quartz image data.
- [images](images.md): The complete array of image objects that compose the animation of an animated object.
- [imageAsset](imageasset.md): The image asset (if any) for the image.

# CIImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The underlying Core Image data.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CIImage * CIImage;
```

<a id="Discussion"></a>

## Discussion

If the `UIImage` object was initialized using a [CGImageRef](../../coregraphics/cgimage.md), the value of the property is `nil`.

## See Also

### Getting the image data

- [CGImage](cgimage.md): The underlying Quartz image data.
- [images](images.md): The complete array of image objects that compose the animation of an animated object.
- [imageAsset](imageasset.md): The image asset (if any) for the image.
