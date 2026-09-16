> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/hovereffectgroup/behavior/preservesgroup

# preservesGroup

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 26.0+

Preserves the current phase of the group.

## Declaration

```swift
static let preservesGroup: HoverEffectGroup.Behavior
```

<a id="discussion"></a>

## Discussion

Use this behavior when an effect should not activate other effects in a group, unless the group already active. This is useful for describing which parts of a view should trigger an effect, while allowing other areas to simply prevent the effect from ending.
