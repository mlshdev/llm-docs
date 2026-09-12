> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/images](https://developer.apple.com/documentation/uikit/uiimage/images)

# images (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The complete array of image objects that compose the animation of an animated object.

## Declaration

```swift
var images: [UIImage]? { get }
```

<a id="Discussion"></a>

## Discussion

For a non-animated image, the value of this property is `nil`.

## See Also

### Getting the image data

- [cgImage](cgimage.md): The underlying Quartz image data.
- [ciImage](ciimage.md): The underlying Core Image data.
- [imageAsset](imageasset.md): The image asset (if any) for the image.

# images (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The complete array of image objects that compose the animation of an animated object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<UIImage *> * images;
```

<a id="Discussion"></a>

## Discussion

For a non-animated image, the value of this property is `nil`.

## See Also

### Getting the image data

- [CGImage](cgimage.md): The underlying Quartz image data.
- [CIImage](ciimage.md): The underlying Core Image data.
- [imageAsset](imageasset.md): The image asset (if any) for the image.
