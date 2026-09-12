> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3dprotocol/unapply(_:)-4ip05](https://developer.apple.com/documentation/spatial/primitive3dprotocol/unapply(_:)-4ip05)

# unapply(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unapplies a projective transform.

## Declaration

```swift
mutating func unapply(_ transform: Self.ProjectiveTransform)
```

## Parameters

- `transform`: The projective transform.

<a id="discussion"></a>

## Discussion

> **Note**

> When unapplying transforms on rectangle structures, the transform must be rectilinear, otherwise this function has no effect.
