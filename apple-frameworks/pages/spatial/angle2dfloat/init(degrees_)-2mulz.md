> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/angle2dfloat/init(degrees:)-2mulz](https://developer.apple.com/documentation/spatial/angle2dfloat/init(degrees:)-2mulz)

# init(degrees:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new angle from floating-point degrees.

## Declaration

```swift
init<T>(degrees: T) where T : BinaryFloatingPoint
```

<a id="discussion"></a>

## Discussion

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
