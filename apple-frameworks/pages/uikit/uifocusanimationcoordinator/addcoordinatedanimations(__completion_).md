> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusanimationcoordinator/addcoordinatedanimations(_:completion:)](https://developer.apple.com/documentation/uikit/uifocusanimationcoordinator/addcoordinatedanimations(_:completion:))

# addCoordinatedAnimations(\_:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Specifies the animations to coordinate with the active focus animation.

## Declaration

```swift
func addCoordinatedAnimations(_ animations: (() -> Void)?, completion: (() -> Void)? = nil)
```

## Parameters

- `animations`: The animation to be run.
- `completion`: A block object to be executed after the main animation completes. Any animations specified are run in the same animation context as the main animation.

<a id="Discussion"></a>

## Discussion

Use this method to coordinate your custom animations with the system animations for adding or removing focus.

Unless the duration time is inherited, the specified animations may not run in the same context as the main animation. It is perfectly legitimate to specify only a completion block.

## See Also

### Adding animations to focus updates

- [addCoordinatedFocusingAnimations(\_:completion:)](addcoordinatedfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for adding focus to an item.
- [addCoordinatedUnfocusingAnimations(\_:completion:)](addcoordinatedunfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for removing focus from an item.
- [UIFocusAnimationContext](../uifocusanimationcontext.md): Information about focusing animations being performed by the system.

# addCoordinatedAnimations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Specifies the animations to coordinate with the active focus animation.

## Declaration

```objectivec
- (void) addCoordinatedAnimations:(void (^)()) animations completion:(void (^)()) completion;
```

## Parameters

- `animations`: The animation to be run.
- `completion`: A block object to be executed after the main animation completes. Any animations specified are run in the same animation context as the main animation.

<a id="Discussion"></a>

## Discussion

Use this method to coordinate your custom animations with the system animations for adding or removing focus.

Unless the duration time is inherited, the specified animations may not run in the same context as the main animation. It is perfectly legitimate to specify only a completion block.

## See Also

### Adding animations to focus updates

- [addCoordinatedFocusingAnimations:completion:](addcoordinatedfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for adding focus to an item.
- [addCoordinatedUnfocusingAnimations:completion:](addcoordinatedunfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for removing focus from an item.
- [UIFocusAnimationContext](../uifocusanimationcontext.md): Information about focusing animations being performed by the system.
