> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/animationduration](https://developer.apple.com/documentation/uikit/uiimageview/animationduration)

# animationDuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The amount of time it takes to go through one cycle of the images.

## Declaration

```swift
var animationDuration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The time duration is measured in seconds. The default value of this property is `0.0`, which causes the image view to use a duration equal to the number of images multiplied by 1/30th of a second. Thus, if you had 30 images, the duration would be 1 second.

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [startAnimating()](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating()](stopanimating%28%29.md): Stops animating the images in the receiver.
- [isAnimating](isanimating.md): Returns a Boolean value indicating whether the animation is running.

# animationDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The amount of time it takes to go through one cycle of the images.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval animationDuration;
```

<a id="Discussion"></a>

## Discussion

The time duration is measured in seconds. The default value of this property is `0.0`, which causes the image view to use a duration equal to the number of images multiplied by 1/30th of a second. Thus, if you had 30 images, the duration would be 1 second.

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [startAnimating](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating](stopanimating%28%29.md): Stops animating the images in the receiver.
- [animating](isanimating.md): Returns a Boolean value indicating whether the animation is running.
