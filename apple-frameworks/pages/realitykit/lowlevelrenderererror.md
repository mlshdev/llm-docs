> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderererror](https://developer.apple.com/documentation/realitykit/lowlevelrenderererror)

# LowLevelRendererError

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An error thrown when creating or configuring a renderer.

## Declaration

```swift
struct LowLevelRendererError
```

## Topics

### Describing the error

- [errorDescription](lowlevelrenderererror/errordescription.md): A human-readable description of the error.
- [failureReason](lowlevelrenderererror/failurereason.md): A human-readable explanation of why the error occurred.
- [recoverySuggestion](lowlevelrenderererror/recoverysuggestion.md): A human-readable suggestion for how to recover from the error.
- [helpAnchor](lowlevelrenderererror/helpanchor.md): A link to documentation for the error.

### Default Implementations

- [LocalizedError Implementations](lowlevelrenderererror/localizederror-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Render contexts

- [LowLevelRenderer](lowlevelrenderer.md): A renderer that encodes draw calls for a collection of mesh instances into a Metal command buffer.
- [LowLevelRenderContext](lowlevelrendercontext.md): An entry point for creating rendering resources and compiling materials.
- [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md): The interface for creating lighting functions for use in materials.
- [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md): The interface for creating Metal shader functions from a ShaderGraph.
- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md): A standalone Metal-backed render context for creating low-level rendering resources.
- [LowLevelRenderContextError](lowlevelrendercontexterror.md): An error thrown when binding or updating a low-level rendering resource fails.
