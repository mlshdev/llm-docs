> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/animation/shouldmerge(previous:value:time:context:)

# shouldMerge(previous:value:time:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the current animation should merge with a previous animation.

## Declaration

```swift
func shouldMerge<V>(previous: Animation, value: V, time: TimeInterval, context: inout AnimationContext<V>) -> Bool where V : VectorArithmetic
```
