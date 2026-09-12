> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/generate(fromequirectangular:withname:)-6mxsi](https://developer.apple.com/documentation/realitykit/environmentresource/generate(fromequirectangular:withname:)-6mxsi)

# generate(fromEquirectangular:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+ (deprecated in 2.0)

Asynchronously generates an environment resource from an equirectangular image.

## Declaration

```swift
@MainActor @preconcurrency static func generate(fromEquirectangular cgImage: CGImage, withName resourceName: String? = nil) async throws -> EnvironmentResource
```

## See Also

### Deprecated

- [generate(fromEquirectangular:withName:)](generate%28fromequirectangular_withname_%29-3wtpe.md): Deprecated. Synchronously generates an environment resource from an equirectangular image.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Asynchronously loads an environment resource from a bundle.
