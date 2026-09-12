> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/animationrepeatcount](https://developer.apple.com/documentation/uikit/uiimageview/animationrepeatcount)

# animationRepeatCount (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies the number of times to repeat the animation.

## Declaration

```swift
var animationRepeatCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which specifies to repeat the animation indefinitely.

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [startAnimating()](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating()](stopanimating%28%29.md): Stops animating the images in the receiver.
- [isAnimating](isanimating.md): Returns a Boolean value indicating whether the animation is running.

# animationRepeatCount (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies the number of times to repeat the animation.

## Declaration

```objectivec
@property (nonatomic) NSInteger animationRepeatCount;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which specifies to repeat the animation indefinitely.

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [startAnimating](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating](stopanimating%28%29.md): Stops animating the images in the receiver.
- [animating](isanimating.md): Returns a Boolean value indicating whether the animation is running.
