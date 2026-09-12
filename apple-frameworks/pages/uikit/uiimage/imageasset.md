> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/imageasset](https://developer.apple.com/documentation/uikit/uiimage/imageasset)

# imageAsset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image asset (if any) for the image.

## Declaration

```swift
var imageAsset: UIImageAsset? { get }
```

<a id="Discussion"></a>

## Discussion

For images loaded from an image assets, this property contains an image asset object that you can use to fetch the other variants of the image. If you did not create the image object using an image asset, the value of this property is `nil`. This property is always `nil` for images created using a [ciImage](ciimage.md) object.

## See Also

### Getting the image data

- [cgImage](cgimage.md): The underlying Quartz image data.
- [ciImage](ciimage.md): The underlying Core Image data.
- [images](images.md): The complete array of image objects that compose the animation of an animated object.

# imageAsset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image asset (if any) for the image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImageAsset * imageAsset;
```

<a id="Discussion"></a>

## Discussion

For images loaded from an image assets, this property contains an image asset object that you can use to fetch the other variants of the image. If you did not create the image object using an image asset, the value of this property is `nil`. This property is always `nil` for images created using a [CIImage](ciimage.md) object.

## See Also

### Getting the image data

- [CGImage](cgimage.md): The underlying Quartz image data.
- [CIImage](ciimage.md): The underlying Core Image data.
- [images](images.md): The complete array of image objects that compose the animation of an animated object.
