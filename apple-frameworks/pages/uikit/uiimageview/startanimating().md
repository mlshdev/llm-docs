> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/startanimating()](https://developer.apple.com/documentation/uikit/uiimageview/startanimating())

# startAnimating() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Starts animating the images in the receiver.

## Declaration

```swift
func startAnimating()
```

<a id="Discussion"></a>

## Discussion

This method always starts the animation from the first image in the list.

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [stopAnimating()](stopanimating%28%29.md): Stops animating the images in the receiver.
- [isAnimating](isanimating.md): Returns a Boolean value indicating whether the animation is running.

# startAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Starts animating the images in the receiver.

## Declaration

```objectivec
- (void) startAnimating;
```

<a id="Discussion"></a>

## Discussion

This method always starts the animation from the first image in the list.

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [stopAnimating](stopanimating%28%29.md): Stops animating the images in the receiver.
- [animating](isanimating.md): Returns a Boolean value indicating whether the animation is running.
