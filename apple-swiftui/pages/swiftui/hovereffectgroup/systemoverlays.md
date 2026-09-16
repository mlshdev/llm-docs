> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/hovereffectgroup/systemoverlays

# systemOverlays

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 26.0+

A `HoverEffectGroup` that becomes active when system overlays are visible.

## Declaration

```swift
static var systemOverlays: HoverEffectGroup { get }
```

<a id="discussion"></a>

## Discussion

Use this group to synchronize effects with system overlays. In the following example, the back button will be hidden whenever system overlays are hidden.

```swift
Button("Back") { }
    .hoverEffect(in: .systemOverlays) { e, isActive, _ in
        e.animation(
            isActive ? .systemOverlayAppearance : .systemOverlayDelayedDisappearance
        ) {
            $0.opacity(isActive ? 1 : 0)
        }
    }
    .persistentSystemOverlays(.hidden)
```

This example uses the `systemOverlayAppearance` and `systemOverlayDisappearance` animations to ensure the effect using the same timing as system overlays.

If `persistentSystemOverlays` is not `.hidden`, this group will always be active.
