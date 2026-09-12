> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/isanimated](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/isanimated)

# isAnimated (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition should be animated.

## Declaration

```swift
var isAnimated: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is always [true](https://developer.apple.com/documentation/swift/true) for modal presentation styles other than the [UIModalPresentationStyle.custom](../uimodalpresentationstyle/custom.md) style. When the modal presentation style is [UIModalPresentationStyle.custom](../uimodalpresentationstyle/custom.md), the value is [true](https://developer.apple.com/documentation/swift/true) if the transition should be animated or [false](https://developer.apple.com/documentation/swift/false) if it should not. Use this value to determine whether you need to animate a custom transition into place, or whether you should install the final views into the container without animating the changes.

## See Also

### Getting the transition behaviors

- [isInteractive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [presentationStyle](presentationstyle.md): Returns the presentation style for the view controller transition.

# animated (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition should be animated.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAnimated) BOOL animated;
```

<a id="Discussion"></a>

## Discussion

The value of this property is always [true](https://developer.apple.com/documentation/swift/true) for modal presentation styles other than the [UIModalPresentationCustom](../uimodalpresentationstyle/custom.md) style. When the modal presentation style is [UIModalPresentationCustom](../uimodalpresentationstyle/custom.md), the value is [true](https://developer.apple.com/documentation/swift/true) if the transition should be animated or [false](https://developer.apple.com/documentation/swift/false) if it should not. Use this value to determine whether you need to animate a custom transition into place, or whether you should install the final views into the container without animating the changes.

## See Also

### Getting the transition behaviors

- [interactive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [presentationStyle](presentationstyle.md): Returns the presentation style for the view controller transition.
