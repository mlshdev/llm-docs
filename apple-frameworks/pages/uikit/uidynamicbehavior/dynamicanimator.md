> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uidynamicbehavior/dynamicanimator

# dynamicAnimator (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The dynamic animator that the dynamic behavior is associated with.

## Declaration

```swift
var dynamicAnimator: UIDynamicAnimator? { get }
```

<a id="Discussion"></a>

## Discussion

If the dynamic behavior is not associated with a dynamic animator, the value of this property is `nil`.

## See Also

### Responding to changes in the behavior tree

- [willMove(to:)](willmove%28to_%29.md): Called when the dynamic behavior is added to, or removed from, a dynamic animator.

# dynamicAnimator (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The dynamic animator that the dynamic behavior is associated with.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIDynamicAnimator * dynamicAnimator;
```

<a id="Discussion"></a>

## Discussion

If the dynamic behavior is not associated with a dynamic animator, the value of this property is `nil`.

## See Also

### Responding to changes in the behavior tree

- [willMoveToAnimator:](willmove%28to_%29.md): Called when the dynamic behavior is added to, or removed from, a dynamic animator.
