> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/environmentresource/skyboxmode/preserve

# preserve

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Preserve and reference the original skybox cube texture.

## Declaration

```swift
static var preserve: EnvironmentResource.SkyboxMode { get }
```

## See Also

### Choosing a skybox mode

- [discard](discard.md): Only keep a low-resolution proxy of the skybox, reducing memory usage.
