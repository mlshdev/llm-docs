> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatd/init(_:)-3wkyg](https://developer.apple.com/documentation/simd/simd_quatd/init(_:)-3wkyg)

# init(\_:)

**Framework:** simd  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new quaternion from a Spatial rotation.

## Declaration

```swift
init(_ rotation: Rotation3DFloat)
```

<a id="discussion"></a>

## Discussion

Values rounded to a representable value, if necessary.

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
