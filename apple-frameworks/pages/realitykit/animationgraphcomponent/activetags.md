> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activetags

# activeTags

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The tags that were active or fired during the most recent graph evaluation tick.

## Declaration

```swift
var activeTags: [AnimationGraphComponent.ActiveTag] { get }
```

## See Also

### Accessing active tags

- [AnimationGraphComponent.ActiveTag](activetag.md): A graph-level signal raised by the graph while certain states are active.
