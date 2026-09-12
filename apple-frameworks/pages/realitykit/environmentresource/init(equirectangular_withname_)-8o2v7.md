> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/init(equirectangular:withname:)-8o2v7](https://developer.apple.com/documentation/realitykit/environmentresource/init(equirectangular:withname:)-8o2v7)

# init(equirectangular:withName:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ · macOS 15.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 2.0+ (deprecated in 27.0)

Asynchronously generates an environment resource from an equirectangular image.

> Use \`init(equirectangular:options:)\` instead. Will be deprecated to support skybox-free EnvironmentResource.

## Declaration

```swift
@MainActor @preconcurrency convenience init(equirectangular cgImage: CGImage, withName resourceName: String? = nil) async throws
```

## Parameters

- `cgImage`: The source equirectangular (latitude, longitude) image. To preserve all details use an image where the width is half the height.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

## See Also

### Loading the resource

- [init(named:in:)](init%28named_in_%29.md): Deprecated. Asynchronously loads an environment resource from a bundle.
- [init(cube:options:)](init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [init(cube:options:)](init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [load(named:in:)](load%28named_in_%29.md): Deprecated. Synchronously loads an environment resource from a bundle.
