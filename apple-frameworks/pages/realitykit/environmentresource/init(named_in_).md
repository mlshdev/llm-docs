> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/init(named:in:)](https://developer.apple.com/documentation/realitykit/environmentresource/init(named:in:))

# init(named:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ · macOS 15.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asynchronously loads an environment resource from a bundle.

> Use \`init(named:in:skyboxMode:)\` instead. Will be deprecated to support skybox-free EnvironmentResource.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, in bundle: Bundle? = nil) async throws
```

## See Also

### Loading the resource

- [init(equirectangular:withName:)](init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:withName:)](init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(cube:options:)](init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [init(cube:options:)](init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [load(named:in:)](load%28named_in_%29.md): Deprecated. Synchronously loads an environment resource from a bundle.
