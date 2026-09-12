> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectphaseoverride/activetemporarily(trigger:)](https://developer.apple.com/documentation/swiftui/hovereffectphaseoverride/activetemporarily(trigger:))

# activeTemporarily(trigger:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Temporaily transitions to the active phase until all animations finish, and the transition is complete.

## Declaration

```swift
static func activeTemporarily(trigger: some Equatable) -> HoverEffectPhaseOverride
```

## Parameters

- `trigger`: A value to observe for changes. The override will be reapplied whenever this value changes.

<a id="discussion"></a>

## Discussion

Use `activeTemporarily(trigger:)` to override an effect’s phase until it fully transitions to its active phase. The transition will use the animations defined by the effect, but will ignore any delays.

When the override expires, the effect will respond to hover events again. If the view is hovered, the effect will remain in the active phase. Otherwise it will begin transitioning to the inactive phase, honoring any delays defined on the effect.

When applied to a group, all effects in the group become active as well. Applying overrides to multiple effects in the same group is undefined, due to it not being clear which override should be applied.
