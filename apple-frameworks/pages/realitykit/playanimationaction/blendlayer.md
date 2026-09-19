> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/playanimationaction/blendlayer

# blendLayer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An integer that specifies the order in which to apply animations when more than one animation is playing.

## Declaration

```swift
var blendLayer: Int
```

<a id="discussion"></a>

## Discussion

Animations in a lower layer are applied before animations in a higher layer. Animations in the same layer are applied in the order in which the animations where started.
