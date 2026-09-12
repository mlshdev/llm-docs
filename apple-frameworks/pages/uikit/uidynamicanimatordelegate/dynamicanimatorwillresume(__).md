> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimatordelegate/dynamicanimatorwillresume(_:)](https://developer.apple.com/documentation/uikit/uidynamicanimatordelegate/dynamicanimatorwillresume(_:))

# dynamicAnimatorWillResume(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a dynamic animator is about to resume the animations for its behaviors’ associated dynamic items.

## Declaration

```swift
optional func dynamicAnimatorWillResume(_ animator: UIDynamicAnimator)
```

## Parameters

- `animator`: The dynamic animator that is about to resume animation.

## See Also

### Responding to animation pausing and resumption

- [dynamicAnimatorDidPause(\_:)](dynamicanimatordidpause%28__%29.md): Called when a dynamic animator pauses the animations for its behaviors’ associated dynamic items.

# dynamicAnimatorWillResume: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when a dynamic animator is about to resume the animations for its behaviors’ associated dynamic items.

## Declaration

```objectivec
- (void) dynamicAnimatorWillResume:(UIDynamicAnimator *) animator;
```

## Parameters

- `animator`: The dynamic animator that is about to resume animation.

## See Also

### Responding to animation pausing and resumption

- [dynamicAnimatorDidPause:](dynamicanimatordidpause%28__%29.md): Called when a dynamic animator pauses the animations for its behaviors’ associated dynamic items.
