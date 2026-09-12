> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusanimationcoordinator/addcoordinatedunfocusinganimations(_:completion:)](https://developer.apple.com/documentation/uikit/uifocusanimationcoordinator/addcoordinatedunfocusinganimations(_:completion:))

# addCoordinatedUnfocusingAnimations(\_:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Runs the specified set of animations together with the system animations for removing focus from an item.

## Declaration

```swift
func addCoordinatedUnfocusingAnimations(_ animations: ((any UIFocusAnimationContext) -> Void)?, completion: (() -> Void)? = nil)
```

## Parameters

- `animations`: A block object containing your unfocus-related animations. This block has no return value and takes the following parameter:

  - **context**: An object containing information about the main animations. Use this information to configure your custom animations. For more information, see [UIFocusAnimationContext](../uifocusanimationcontext.md).
- `completion`: The block object to execute after the main animation completes. The specified animations are run in the same animation context as the main animation.

<a id="Discussion"></a>

## Discussion

When focus is being removed from an item, use this method to coordinate your custom animations with the system animations.  The animations you specify are run in the same animation block as the system animations. Use the information in the `context` parameter to determine any custom behaviors for your animations. For example, you might configure your animations to run in half the time as the main animation and start after a short delay.

## See Also

### Adding animations to focus updates

- [addCoordinatedFocusingAnimations(\_:completion:)](addcoordinatedfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for adding focus to an item.
- [addCoordinatedAnimations(\_:completion:)](addcoordinatedanimations%28__completion_%29.md): Specifies the animations to coordinate with the active focus animation.
- [UIFocusAnimationContext](../uifocusanimationcontext.md): Information about focusing animations being performed by the system.

# addCoordinatedUnfocusingAnimations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Runs the specified set of animations together with the system animations for removing focus from an item.

## Declaration

```objectivec
- (void) addCoordinatedUnfocusingAnimations:(void (^)(id<UIFocusAnimationContext>animationContext)) animations completion:(void (^)()) completion;
```

## Parameters

- `animations`: A block object containing your unfocus-related animations. This block has no return value and takes the following parameter:

  - **context**: An object containing information about the main animations. Use this information to configure your custom animations. For more information, see [UIFocusAnimationContext](../uifocusanimationcontext.md).
- `completion`: The block object to execute after the main animation completes. The specified animations are run in the same animation context as the main animation.

<a id="Discussion"></a>

## Discussion

When focus is being removed from an item, use this method to coordinate your custom animations with the system animations.  The animations you specify are run in the same animation block as the system animations. Use the information in the `context` parameter to determine any custom behaviors for your animations. For example, you might configure your animations to run in half the time as the main animation and start after a short delay.

## See Also

### Adding animations to focus updates

- [addCoordinatedFocusingAnimations:completion:](addcoordinatedfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for adding focus to an item.
- [addCoordinatedAnimations:completion:](addcoordinatedanimations%28__completion_%29.md): Specifies the animations to coordinate with the active focus animation.
- [UIFocusAnimationContext](../uifocusanimationcontext.md): Information about focusing animations being performed by the system.
