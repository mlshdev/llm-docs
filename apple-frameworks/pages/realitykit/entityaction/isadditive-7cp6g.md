> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entityaction/isadditive-7cp6g

# isAdditive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean value that determines whether this action additively blends with the prior stage.

## Declaration

```swift
var isAdditive: Bool { get }
```

<a id="discussion"></a>

## Discussion

When `true`, the action’s animation output is relative to an absolute base value, and the animation system blends the result additively with the prior blend stage.

Apply actions additively by configuring them to produce animation offsets, such as delta values.

The default value is `false`.
