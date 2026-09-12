> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/init(from:timing:isadditive:)](https://developer.apple.com/documentation/realitykit/fromtobyaction/init(from:timing:isadditive:))

# init(from:timing:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new from to by action to animate from a specified value, towards the defaultSource value.

## Declaration

```swift
init(from: Value, timing: AnimationTimingFunction = .linear, isAdditive: Bool = false)
```

## Parameters

- `from`: Value set at the start of the animation.
- `timing`: Controls the progress of the animation.
- `isAdditive`: Specifies whether you can additively blend the output from the action’s animation.

<a id="discussion"></a>

## Discussion

`from` → `defaultSource`
