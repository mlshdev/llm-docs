> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3dfloat/init(width:height:depth:)-8h26f](https://developer.apple.com/documentation/spatial/size3dfloat/init(width:height:depth:)-8h26f)

# init(width:height:depth:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new point from the floating-point values.

## Declaration

```swift
init<T>(width: T, height: T, depth: T) where T : BinaryFloatingPoint
```

<a id="discussion"></a>

## Discussion

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
