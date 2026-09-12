> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/init(from:by:timing:isadditive:)](https://developer.apple.com/documentation/realitykit/fromtobyaction/init(from:by:timing:isadditive:))

# init(from:by:timing:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new action that interpolates towards a specified value, which is relative to the starting value.

## Declaration

```swift
init(from: Value? = nil, by: Value, timing: AnimationTimingFunction = .linear, isAdditive: Bool = false)
```

## Parameters

- `from`: Value set at the start of the animation, or `nil` to use the default source.
- `by`: Value relative to the initial value to determine the final value.
- `timing`: Controls the progress of the animation.
- `isAdditive`: Specifies whether you can additively blend the output from the action’s animation.

<a id="discussion"></a>

## Discussion

`from` → `from + by` or `defaultSource` → `defaultSource + by`
