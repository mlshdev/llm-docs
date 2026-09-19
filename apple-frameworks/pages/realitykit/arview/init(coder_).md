> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/arview/init(coder:)

# init(coder:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Creates an AR view initialized from data in a given decoder.

## Declaration

```swift
@MainActor @preconcurrency required dynamic init?(coder decoder: NSCoder)
```

## Parameters

- `decoder`: The decoder used to initialize the view.

## See Also

### Creating a view

- [init(frame:)](init%28frame_%29.md): Creates an AR view with the specified dimensions.
- [init(frame:cameraMode:automaticallyConfigureSession:)](init%28frame_cameramode_automaticallyconfiguresession_%29.md): Creates an AR view with the specified dimensions, camera mode, and session configuration state.
- [init(frame:cameraMode:)](init%28frame_cameramode_%29.md): Deprecated. Creates an AR view with the specified dimensions and camera mode.
