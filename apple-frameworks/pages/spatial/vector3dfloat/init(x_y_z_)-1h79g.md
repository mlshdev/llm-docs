> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3dfloat/init(x:y:z:)-1h79g](https://developer.apple.com/documentation/spatial/vector3dfloat/init(x:y:z:)-1h79g)

# init(x:y:z:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new vector from the doubleing-point values.

## Declaration

```swift
init<T>(x: T, y: T, z: T) where T : BinaryFloatingPoint
```

<a id="discussion"></a>

## Discussion

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
