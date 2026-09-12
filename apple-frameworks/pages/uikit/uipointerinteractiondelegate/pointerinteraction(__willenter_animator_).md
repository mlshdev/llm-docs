> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:willenter:animator:)](https://developer.apple.com/documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:willenter:animator:))

# pointerInteraction(\_:willEnter:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Informs the delegate when the pointer enters a given region.

## Declaration

```swift
optional func pointerInteraction(_ interaction: UIPointerInteraction, willEnter region: UIPointerRegion, animator: any UIPointerInteractionAnimating)
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `region`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.
- `animator`: The animator the framework runs when the pointer enters the region. Add animations to run them alongside the pointer’s entrance animation.

## See Also

### Handling animations for pointer regions

- [pointerInteraction(\_:willExit:animator:)](pointerinteraction%28__willexit_animator_%29.md): Informs the delegate when the pointer exits a given region.

# pointerInteraction:willEnterRegion:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Informs the delegate when the pointer enters a given region.

## Declaration

```objectivec
- (void) pointerInteraction:(UIPointerInteraction *) interaction willEnterRegion:(UIPointerRegion *) region animator:(id<UIPointerInteractionAnimating>) animator;
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `region`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.
- `animator`: The animator the framework runs when the pointer enters the region. Add animations to run them alongside the pointer’s entrance animation.

## See Also

### Handling animations for pointer regions

- [pointerInteraction:willExitRegion:animator:](pointerinteraction%28__willexit_animator_%29.md): Informs the delegate when the pointer exits a given region.
