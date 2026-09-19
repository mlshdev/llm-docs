> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/init(descriptor:)

# init(descriptor:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a program by compiling the shader node graph in the given descriptor.

## Declaration

```swift
init(descriptor: ShaderGraphMaterial.Program.Descriptor) async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> If the graph is invalid or shader compilation fails.
