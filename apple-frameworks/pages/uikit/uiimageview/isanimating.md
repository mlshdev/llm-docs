> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/isanimating](https://developer.apple.com/documentation/uikit/uiimageview/isanimating)

# isAnimating (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether the animation is running.

## Declaration

```swift
var isAnimating: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the animation is running; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [startAnimating()](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating()](stopanimating%28%29.md): Stops animating the images in the receiver.

# animating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether the animation is running.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAnimating) BOOL animating;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the animation is running; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Animating a sequence of images

- [animationImages](animationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation.
- [highlightedAnimationImages](highlightedanimationimages.md): An array of [UIImage](../uiimage.md) objects to use for an animation when the view is highlighted.
- [animationDuration](animationduration.md): The amount of time it takes to go through one cycle of the images.
- [animationRepeatCount](animationrepeatcount.md): Specifies the number of times to repeat the animation.
- [startAnimating](startanimating%28%29.md): Starts animating the images in the receiver.
- [stopAnimating](stopanimating%28%29.md): Stops animating the images in the receiver.
