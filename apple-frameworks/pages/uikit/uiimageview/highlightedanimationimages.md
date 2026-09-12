> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/highlightedanimationimages](https://developer.apple.com/documentation/uikit/uiimageview/highlightedanimationimages)

# highlightedAnimationImages (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.

## Declaration

```swift
var highlightedAnimationImages: [UIImage]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array must contain [UIImage](../uiimage.md) objects. You may use the same image object more than once in the array. Setting this property to a value other than `nil` hides the image represented by the [highlightedImage](highlightedimage.md) property. The value of this property is `nil` by default.

## See Also

### Related Documentation

- [highlightedImage](highlightedimage.md): The highlighted image displayed in the image view.

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [startAnimating()](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating()](stopanimating%28%29.md): Stops animating the images in the receiver.
- [isAnimating](isanimating.md): Returns a Boolean value indicating whether the animation is running.

# highlightedAnimationImages (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UIImage *> * highlightedAnimationImages;
```

<a id="Discussion"></a>

## Discussion

The array must contain [UIImage](../uiimage.md) objects. You may use the same image object more than once in the array. Setting this property to a value other than `nil` hides the image represented by the [highlightedImage](highlightedimage.md) property. The value of this property is `nil` by default.

## See Also

### Related Documentation

- [highlightedImage](highlightedimage.md): The highlighted image displayed in the image view.

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [startAnimating](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating](stopanimating%28%29.md): Stops animating the images in the receiver.
- [animating](isanimating.md): Returns a Boolean value indicating whether the animation is running.
