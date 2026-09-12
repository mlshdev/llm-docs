> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/ishighlighted](https://developer.apple.com/documentation/uikit/uiimageview/ishighlighted)

# isHighlighted (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the image is highlighted.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether the regular or highlighted images are used. When [isHighlighted](ishighlighted.md) is set to [true](https://developer.apple.com/documentation/swift/true), a non-animated image will use the [highlightedImage](highlightedimage.md) property and an animated image will use the [highlightedAnimationImages](highlightedanimationimages.md). If both of those properties are set to `nil` or if [isHighlighted](ishighlighted.md) is set to [false](https://developer.apple.com/documentation/swift/false), it will use the [image](image.md) and [animationImages](animationimages.md) properties.

## See Also

### Configuring the image view

- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.
- [tintColor](tintcolor.md): A color used to tint template images in the view hierarchy.

# highlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the image is highlighted.

## Declaration

```objectivec
@property (nonatomic, getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

This property determines whether the regular or highlighted images are used. When [highlighted](ishighlighted.md) is set to [true](https://developer.apple.com/documentation/swift/true), a non-animated image will use the [highlightedImage](highlightedimage.md) property and an animated image will use the [highlightedAnimationImages](highlightedanimationimages.md). If both of those properties are set to `nil` or if [highlighted](ishighlighted.md) is set to [false](https://developer.apple.com/documentation/swift/false), it will use the [image](image.md) and [animationImages](animationimages.md) properties.

## See Also

### Configuring the image view

- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.
- [tintColor](tintcolor.md): A color used to tint template images in the view hierarchy.
