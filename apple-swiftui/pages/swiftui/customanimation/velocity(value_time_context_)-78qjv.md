> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customanimation/velocity(value:time:context:)-78qjv](https://developer.apple.com/documentation/swiftui/customanimation/velocity(value:time:context:)-78qjv)

# velocity(value:time:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Calculates the velocity of the animation at a specified time.

## Declaration

```swift
func velocity<V>(value: V, time: TimeInterval, context: AnimationContext<V>) -> V? where V : VectorArithmetic
```

## Parameters

- `value`: The vector to animate towards.
- `time`: The amount of time since the start of the animation.
- `context`: An instance of [AnimationContext](../animationcontext.md) that provides access to state and the animation environment.

<a id="return-value"></a>

## Return Value

The current velocity of the animation, or `nil` if the animation has finished.

<a id="discussion"></a>

## Discussion

Implement this method to provide the velocity of the animation at a given time. Should subsequent animations merge with the animation, the system preserves continuity of the velocity between animations.

The default implementation of this method returns `nil`.

> **Note**

> State and environment data is available to this method via the `context` parameter, but `context` is read-only. This behavior is different than with [animate(value:time:context:)](animate%28value_time_context_%29.md) and [shouldMerge(previous:value:time:context:)](shouldmerge%28previous_value_time_context_%29.md) where `context` is an `inout` parameter, letting you change the context including state data of the animation. For more information about managing state data in a custom animation, see [AnimationContext](../animationcontext.md).
