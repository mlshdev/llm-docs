> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/orbitentityaction/animatedvaluetype

# animatedValueType

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The type for the value that the action modifies over time.

## Declaration

```swift
var animatedValueType: (any AnimatableData.Type)? { get }
```

<a id="discussion"></a>

## Discussion

Set to `nil` for an action that doesn’t modify a value.
