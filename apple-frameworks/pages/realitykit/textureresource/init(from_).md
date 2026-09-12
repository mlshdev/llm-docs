> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/init(from:)](https://developer.apple.com/documentation/realitykit/textureresource/init(from:))

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Asynchronously creates a texture resource from a low-level texture.

## Declaration

```swift
@MainActor @preconcurrency convenience init(from texture: LowLevelTexture) async throws
```

## Parameters

- `texture`: The texture data that defines the resource.
