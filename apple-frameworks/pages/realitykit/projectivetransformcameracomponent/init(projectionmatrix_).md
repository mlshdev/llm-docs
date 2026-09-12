> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/projectivetransformcameracomponent/init(projectionmatrix:)](https://developer.apple.com/documentation/realitykit/projectivetransformcameracomponent/init(projectionmatrix:))

# init(projectionMatrix:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new custom matrix camera component with the given settings.

## Declaration

```swift
init(projectionMatrix: float4x4)
```

## Parameters

- `projectionMatrix`: The custom projection matrix the user wants to use.

<a id="discussion"></a>

## Discussion

The matrix uses reverse depth.
