> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraphmaterial/init(program:)

# init(program:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Create a ShaderGraphMaterial with an already initialized Program. Use this method when you want to preload a library of shaders and create instances of them quickly and synchronously via ShaderGraphMaterials at runtime.

## Declaration

```swift
init(program: ShaderGraphMaterial.Program)
```
