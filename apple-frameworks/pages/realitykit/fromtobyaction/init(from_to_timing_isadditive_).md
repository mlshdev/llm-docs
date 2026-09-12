> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/init(from:to:timing:isadditive:)](https://developer.apple.com/documentation/realitykit/fromtobyaction/init(from:to:timing:isadditive:))

# init(from:to:timing:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new action that interpolates towards a specified final value.

## Declaration

```swift
init(from: Value? = nil, to: Value, timing: AnimationTimingFunction = .linear, isAdditive: Bool = false)
```

## Parameters

- `from`: Value set at the start of the animation, or `nil` to use the default source.
- `to`: Value set at the end of the animation.
- `timing`: Controls the progress of the animation.
- `isAdditive`: A Boolean value that indicates whether the animation system additively blends the action’s output with the base value.

<a id="discussion"></a>

## Discussion

`from` → `to` or `defaultSource` → `to`
