> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/cgimage](https://developer.apple.com/documentation/uikit/uiimage/cgimage)

# cgImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The underlying Quartz image data.

## Declaration

```swift
var cgImage: CGImage? { get }
```

<a id="Discussion"></a>

## Discussion

If the image data has been purged because of memory constraints, invoking this method forces that data to be loaded back into memory. Reloading the image data may incur a performance penalty.

If the `UIImage` object was initialized using a `CIImage` object, the value of the property is `NULL`.

## See Also

### Getting the image data

- [ciImage](ciimage.md): The underlying Core Image data.
- [images](images.md): The complete array of image objects that compose the animation of an animated object.
- [imageAsset](imageasset.md): The image asset (if any) for the image.

# CGImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The underlying Quartz image data.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGImageRef CGImage;
```

<a id="Discussion"></a>

## Discussion

If the image data has been purged because of memory constraints, invoking this method forces that data to be loaded back into memory. Reloading the image data may incur a performance penalty.

If the `UIImage` object was initialized using a `CIImage` object, the value of the property is `NULL`.

## See Also

### Getting the image data

- [CIImage](ciimage.md): The underlying Core Image data.
- [images](images.md): The complete array of image objects that compose the animation of an animated object.
- [imageAsset](imageasset.md): The image asset (if any) for the image.
