> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicbehavior/willmove(to:)](https://developer.apple.com/documentation/uikit/uidynamicbehavior/willmove(to:))

# willMove(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when the dynamic behavior is added to, or removed from, a dynamic animator.

## Declaration

```swift
func willMove(to dynamicAnimator: UIDynamicAnimator?)
```

## Parameters

- `dynamicAnimator`: The dynamic animator that the behavior is being added to, or `nil` if being removed from an animator.

<a id="Discussion"></a>

## Discussion

Use this method as the override point for responding to changes in the UIKit Dynamics behavior tree that involve the dynamic behavior.

## See Also

### Responding to changes in the behavior tree

- [dynamicAnimator](dynamicanimator.md): The dynamic animator that the dynamic behavior is associated with.

# willMoveToAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when the dynamic behavior is added to, or removed from, a dynamic animator.

## Declaration

```objectivec
- (void) willMoveToAnimator:(UIDynamicAnimator *) dynamicAnimator;
```

## Parameters

- `dynamicAnimator`: The dynamic animator that the behavior is being added to, or `nil` if being removed from an animator.

<a id="Discussion"></a>

## Discussion

Use this method as the override point for responding to changes in the UIKit Dynamics behavior tree that involve the dynamic behavior.

## See Also

### Responding to changes in the behavior tree

- [dynamicAnimator](dynamicanimator.md): The dynamic animator that the dynamic behavior is associated with.
