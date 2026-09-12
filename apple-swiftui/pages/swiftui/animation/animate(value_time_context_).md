> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/animate(value:time:context:)](https://developer.apple.com/documentation/swiftui/animation/animate(value:time:context:))

# animate(value:time:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Calculates the current value of the animation.

## Declaration

```swift
func animate<V>(value: V, time: TimeInterval, context: inout AnimationContext<V>) -> V? where V : VectorArithmetic
```

<a id="return-value"></a>

## Return Value

The current value of the animation, or `nil` if the animation has finished.
