> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectphaseoverride/toggledtemporarily(trigger:)](https://developer.apple.com/documentation/swiftui/hovereffectphaseoverride/toggledtemporarily(trigger:))

# toggledTemporarily(trigger:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Temporaily transitions to the opposite of the effect’s current phase at the moment the override is applied.

## Declaration

```swift
static func toggledTemporarily(trigger: some Equatable) -> HoverEffectPhaseOverride
```

## Parameters

- `trigger`: A value to observe for changes. The override will be reapplied whenever this value changes.

<a id="discussion"></a>

## Discussion

Use `toggledTemporarily(trigger:)` to toggle an effect’s current phase until it fully transitions to its new phase. The transition will use the animations defined by the effect, but will ignore any delays.

When the override expires, the effect will respond to hover events again. If the view is hovered, the effect will transition to it’s active phase, otherwise its inactive phase.
