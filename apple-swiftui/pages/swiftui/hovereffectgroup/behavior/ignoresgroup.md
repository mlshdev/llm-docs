> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/hovereffectgroup/behavior/ignoresgroup

# ignoresGroup

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

Ignores the current phase of the match group.

## Declaration

```swift
static let ignoresGroup: HoverEffectGroup.Behavior
```

<a id="discussion"></a>

## Discussion

Use this behavior when an effect should neither activate a group, or become activated by any other effect in the group. The effect will only become active when directly hovered.
