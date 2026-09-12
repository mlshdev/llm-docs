> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/highlightedimage](https://developer.apple.com/documentation/uikit/uiimageview/highlightedimage)

# highlightedImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The highlighted image displayed in the image view.

## Declaration

```swift
var highlightedImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The image in this property is displayed when the image view’s [isHighlighted](ishighlighted.md) property is [true](https://developer.apple.com/documentation/swift/true). If the [highlightedAnimationImages](highlightedanimationimages.md) property contains a valid set of images, those image are used instead.

This property is set to the image (if any) you specified at initialization time. If you did not use the [init(image:highlightedImage:)](init%28image_highlightedimage_%29.md) method to initialize your image view, the initial value of this property is `nil`.

## See Also

### Related Documentation

- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.

### Accessing the displayed images

- [image](image.md): The image displayed in the image view.

# highlightedImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The highlighted image displayed in the image view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * highlightedImage;
```

<a id="Discussion"></a>

## Discussion

The image in this property is displayed when the image view’s [highlighted](ishighlighted.md) property is [true](https://developer.apple.com/documentation/swift/true). If the [highlightedAnimationImages](highlightedanimationimages.md) property contains a valid set of images, those image are used instead.

This property is set to the image (if any) you specified at initialization time. If you did not use the [initWithImage:highlightedImage:](init%28image_highlightedimage_%29.md) method to initialize your image view, the initial value of this property is `nil`.

## See Also

### Related Documentation

- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.

### Accessing the displayed images

- [image](image.md): The image displayed in the image view.
