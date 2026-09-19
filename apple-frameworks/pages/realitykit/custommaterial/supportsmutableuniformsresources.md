> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/custommaterial/supportsmutableuniformsresources

# supportsMutableUniformsResources

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the current device supports resource storage within the WithMutableUniforms API.

## Declaration

```swift
static var supportsMutableUniformsResources: Bool
```

<a id="discussion"></a>

## Discussion

Ensure this is true before setting resources such as textures and buffers on `CustomMaterial.ResourceStorage`
