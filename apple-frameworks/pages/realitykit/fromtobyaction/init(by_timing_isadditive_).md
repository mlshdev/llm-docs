> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/init(by:timing:isadditive:)](https://developer.apple.com/documentation/realitykit/fromtobyaction/init(by:timing:isadditive:))

# init(by:timing:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new action to animate from the deaultSource by a transform relative to the starting transform.

## Declaration

```swift
init(by: Value, timing: AnimationTimingFunction = .linear, isAdditive: Bool = false)
```

## Parameters

- `by`: Transform which is used to increment the starting transform. Used to determine the final transform we animate towards.
- `timing`: Controls the progress of the animation.
- `isAdditive`: Specifies whether you can additively blend the output from the action’s animation.

<a id="discussion"></a>

## Discussion

`defaultSource` → `defaultSource + by`
