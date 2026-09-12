> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/shadowprojectiontype/fixed(znear:zfar:orthographicscale:)](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/shadowprojectiontype/fixed(znear:zfar:orthographicscale:))

# DirectionalLightComponent.Shadow.ShadowProjectionType.fixed(zNear:zFar:orthographicScale:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Shadow projection is manually set up with near plane, far plane, and orthographicScale for width and height

## Declaration

```swift
case fixed(zNear: Float = 0.01, zFar: Float = 10, orthographicScale: Float = 1)
```

## See Also

### Shadow projection types

- [DirectionalLightComponent.Shadow.ShadowProjectionType.automatic(maximumDistance:)](automatic%28maximumdistance_%29.md): Shadow projection is automatically fit with the camera frustum, range is within maximumDistance from camera
