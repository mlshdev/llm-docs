> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/image](https://developer.apple.com/documentation/uikit/uiimageview/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image displayed in the image view.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the main image displayed by the image view. This image is displayed when the image view is in its natural state. When highlighted, the image view displays the image in its [highlightedImage](highlightedimage.md) property instead. If that property is set to `nil`, the image view applies a default highlight to this image. If the [animationImages](animationimages.md) property contains a valid set of images, those images are used instead.

Changing the image in this property does not automatically change the size of the image view. After setting the image, call the [sizeToFit()](../uiview/sizetofit%28%29.md) method to recompute the image view’s size based on the new image and the active constraints.

This property is set to the image you specified at initialization time. If you did not use the [init(image:)](init%28image_%29.md) or [init(image:highlightedImage:)](init%28image_highlightedimage_%29.md) method to initialize your image view, the initial value of this property is `nil`.

## See Also

### Related Documentation

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.

### Accessing the displayed images

- [highlightedImage](highlightedimage.md): The highlighted image displayed in the image view.

# image (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image displayed in the image view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

This property contains the main image displayed by the image view. This image is displayed when the image view is in its natural state. When highlighted, the image view displays the image in its [highlightedImage](highlightedimage.md) property instead. If that property is set to `nil`, the image view applies a default highlight to this image. If the [animationImages](animationimages.md) property contains a valid set of images, those images are used instead.

Changing the image in this property does not automatically change the size of the image view. After setting the image, call the [sizeToFit](../uiview/sizetofit%28%29.md) method to recompute the image view’s size based on the new image and the active constraints.

This property is set to the image you specified at initialization time. If you did not use the [initWithImage:](init%28image_%29.md) or [initWithImage:highlightedImage:](init%28image_highlightedimage_%29.md) method to initialize your image view, the initial value of this property is `nil`.

## See Also

### Related Documentation

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.

### Accessing the displayed images

- [highlightedImage](highlightedimage.md): The highlighted image displayed in the image view.
