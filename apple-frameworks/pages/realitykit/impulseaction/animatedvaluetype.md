> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/impulseaction/animatedvaluetype](https://developer.apple.com/documentation/realitykit/impulseaction/animatedvaluetype)

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
