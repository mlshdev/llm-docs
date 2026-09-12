> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/isreversed](https://developer.apple.com/documentation/uikit/uiviewanimating/isreversed)

# isReversed (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the animation is running in the reverse direction.

## Declaration

```swift
var isReversed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), animations run in the reverse direction—that is, view properties animate back to their original values. When the value is [false](https://developer.apple.com/documentation/swift/false), view properties animate to their intended final values.

When implementing this property, changes should cause the animation to reverse direction. If you allow changes while the animation is running, it is best to pause the animation briefly and then start it again in the opposite direction. Once the animation transitions to the [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md) state, you can ignore changes to this property.

## See Also

### Getting the animator’s state

- [fractionComplete](fractioncomplete.md): The completion percentage of the animation.
- [state](state.md): The current state of the animation.
- [isRunning](isrunning.md): A Boolean value indicating whether the animation is currently running.

# reversed (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the animation is running in the reverse direction.

## Declaration

```objectivec
@property (nonatomic, getter=isReversed) BOOL reversed;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), animations run in the reverse direction—that is, view properties animate back to their original values. When the value is [false](https://developer.apple.com/documentation/swift/false), view properties animate to their intended final values.

When implementing this property, changes should cause the animation to reverse direction. If you allow changes while the animation is running, it is best to pause the animation briefly and then start it again in the opposite direction. Once the animation transitions to the [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md) state, you can ignore changes to this property.

## See Also

### Getting the animator’s state

- [fractionComplete](fractioncomplete.md): The completion percentage of the animation.
- [state](state.md): The current state of the animation.
- [running](isrunning.md): A Boolean value indicating whether the animation is currently running.
