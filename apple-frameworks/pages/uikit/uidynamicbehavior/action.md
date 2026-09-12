> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicbehavior/action](https://developer.apple.com/documentation/uikit/uidynamicbehavior/action)

# action (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The block you want to execute during dynamic animation.

## Declaration

```swift
var action: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The dynamic animator calls the action block on every animation step.

## See Also

### Related Documentation

- [willMove(to:)](willmove%28to_%29.md): Called when the dynamic behavior is added to, or removed from, a dynamic animator.

### Configuring a dynamic behavior

- [addChildBehavior(\_:)](addchildbehavior%28__%29.md): Adds a dynamic behavior, as a child, to a custom dynamic behavior.
- [childBehaviors](childbehaviors.md): Returns the array of dynamic behaviors that are children of a custom dynamic behavior.
- [removeChildBehavior(\_:)](removechildbehavior%28__%29.md): Removes a child dynamic behavior from a custom dynamic behavior.

# action (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The block you want to execute during dynamic animation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^action)();
```

<a id="Discussion"></a>

## Discussion

The dynamic animator calls the action block on every animation step.

## See Also

### Related Documentation

- [willMoveToAnimator:](willmove%28to_%29.md): Called when the dynamic behavior is added to, or removed from, a dynamic animator.

### Configuring a dynamic behavior

- [addChildBehavior:](addchildbehavior%28__%29.md): Adds a dynamic behavior, as a child, to a custom dynamic behavior.
- [childBehaviors](childbehaviors.md): Returns the array of dynamic behaviors that are children of a custom dynamic behavior.
- [removeChildBehavior:](removechildbehavior%28__%29.md): Removes a child dynamic behavior from a custom dynamic behavior.
