> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrolleranimatedtransitioning/animationended(_:)](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/animationended(_:))

# animationEnded(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells your animator object that the transition animations have finished.

## Declaration

```swift
optional func animationEnded(_ transitionCompleted: Bool)
```

## Parameters

- `transitionCompleted`: Contains the value [true](https://developer.apple.com/documentation/swift/true) if the transition completed successfully and the new view controller is now displayed or [false](https://developer.apple.com/documentation/swift/false) if the transition was canceled and the original view controller is still visible.

<a id="Discussion"></a>

## Discussion

UIKit calls this method at the end of a transition to let you know the results. Use this method to perform any final cleanup operations required by your transition animator when the transition finishes.

## See Also

### Performing a transition

- [animateTransition(using:)](animatetransition%28using_%29.md): Tells your animator object to perform the transition animations.

# animationEnded: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells your animator object that the transition animations have finished.

## Declaration

```objectivec
- (void) animationEnded:(BOOL) transitionCompleted;
```

## Parameters

- `transitionCompleted`: Contains the value [true](https://developer.apple.com/documentation/swift/true) if the transition completed successfully and the new view controller is now displayed or [false](https://developer.apple.com/documentation/swift/false) if the transition was canceled and the original view controller is still visible.

<a id="Discussion"></a>

## Discussion

UIKit calls this method at the end of a transition to let you know the results. Use this method to perform any final cleanup operations required by your transition animator when the transition finishes.

## See Also

### Performing a transition

- [animateTransition:](animatetransition%28using_%29.md): Tells your animator object to perform the transition animations.
