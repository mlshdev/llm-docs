> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsdistancejoint/tolerance](https://developer.apple.com/documentation/realitykit/physicsdistancejoint/tolerance)

# tolerance

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An extension of the distance limit, as a percentage-based error tolerance.

## Declaration

```swift
var tolerance: Float
```

<a id="discussion"></a>

## Discussion

For example, a tolerance of `0.01` extends the distance limit by `1` percent. When the pins exceed this distance, the joint constrains the pins until they are within the distance limit.

> **Important**

> Use a non-negative value for the tolerance.
