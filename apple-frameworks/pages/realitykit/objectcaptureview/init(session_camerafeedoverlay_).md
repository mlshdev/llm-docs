> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcaptureview/init(session:camerafeedoverlay:)

# init(session:cameraFeedOverlay:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Renders the current state of the provided session.

## Declaration

```swift
nonisolated init(session: ObjectCaptureSession, @ViewBuilder cameraFeedOverlay: () -> Overlay)
```

## Parameters

- `cameraFeedOverlay`: A view that appears on top of the camera feed and below the point cloud view.
