> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/environmentresource/generate(fromequirectangular:withname:)

# generate(fromEquirectangular:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 1.0+ (deprecated in 2.0)

Asynchronously generates an environment resource from an equirectangular image.

## Declaration

```swift
@MainActor @preconcurrency static func generate(fromEquirectangular cgImage: CGImage, withName resourceName: String? = nil) async throws -> EnvironmentResource
```
