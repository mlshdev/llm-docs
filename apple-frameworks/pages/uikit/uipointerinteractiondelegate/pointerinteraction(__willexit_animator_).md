> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:willexit:animator:)

# pointerInteraction(\_:willExit:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Informs the delegate when the pointer exits a given region.

## Declaration

```swift
optional func pointerInteraction(_ interaction: UIPointerInteraction, willExit region: UIPointerRegion, animator: any UIPointerInteractionAnimating)
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `region`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.
- `animator`: The animator the framework runs when the pointer exists the region. Add animations to run them alongside the pointer’s exit animation.

## See Also

### Handling animations for pointer regions

- [pointerInteraction(\_:willEnter:animator:)](pointerinteraction%28__willenter_animator_%29.md): Informs the delegate when the pointer enters a given region.

# pointerInteraction:willExitRegion:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Informs the delegate when the pointer exits a given region.

## Declaration

```objectivec
- (void) pointerInteraction:(UIPointerInteraction *) interaction willExitRegion:(UIPointerRegion *) region animator:(id<UIPointerInteractionAnimating>) animator;
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `region`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.
- `animator`: The animator the framework runs when the pointer exists the region. Add animations to run them alongside the pointer’s exit animation.

## See Also

### Handling animations for pointer regions

- [pointerInteraction:willEnterRegion:animator:](pointerinteraction%28__willenter_animator_%29.md): Informs the delegate when the pointer enters a given region.
