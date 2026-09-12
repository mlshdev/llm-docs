> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3dprotocol/unapply(_:)-2vz7p](https://developer.apple.com/documentation/spatial/primitive3dprotocol/unapply(_:)-2vz7p)

# unapply(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unapplies a pose.

## Declaration

```swift
mutating func unapply(_ pose: Self.Pose)
```

## Parameters

- `pose`: The projective transform.

<a id="discussion"></a>

## Discussion

> **Note**

> When unapplying transforms on size and rectangle structures, the transform must be rectilinear, otherwise this function has no effect.
