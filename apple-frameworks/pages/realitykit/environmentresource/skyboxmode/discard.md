> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/environmentresource/skyboxmode/discard

# discard

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Only keep a low-resolution proxy of the skybox, reducing memory usage.

## Declaration

```swift
static var discard: EnvironmentResource.SkyboxMode { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> The skybox is not needed for lighting with `VirtualEnvironmentProbeComponent` and `ImageBasedLightComponent`.

## See Also

### Choosing a skybox mode

- [preserve](preserve.md): Preserve and reference the original skybox cube texture.
