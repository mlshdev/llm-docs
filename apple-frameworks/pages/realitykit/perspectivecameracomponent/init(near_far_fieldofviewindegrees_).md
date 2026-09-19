> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/perspectivecameracomponent/init(near:far:fieldofviewindegrees:)

# init(near:far:fieldOfViewInDegrees:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a perspective camera component from near and far clipping planes and a field of view.

## Declaration

```swift
init(near: Float = 0.01, far: Float = .infinity, fieldOfViewInDegrees: Float = 60.0)
```

## Parameters

- `near`: The minimum distance in meters from the camera that the camera can see.
- `far`: The maximum distance in meters from the camera that the camera can see.
- `fieldOfViewInDegrees`: The camera’s field of view, in degrees.

## See Also

### Creating a camera component

- [init(near:far:fieldOfViewInDegrees:fieldOfViewOrientation:)](init%28near_far_fieldofviewindegrees_fieldofvieworientation_%29.md): Creates a perspective camera component from near and far clipping planes, a field of view, and an orientation.
