> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/environmentresource/init(equirectangular:withname:)

# init(equirectangular:withName:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ (deprecated in 27.2) · iPadOS 18.0+ (deprecated in 27.2) · Mac Catalyst 18.0+ · macOS 15.0+ (deprecated in 27.2) · tvOS 26.0+ (deprecated in 27.2) · visionOS 2.0+ (deprecated in 27.2)

Asynchronously generates an environment resource from an equirectangular image.

> Use \`init(equirectangular:options:)\` instead. Will be deprecated to support skybox-free EnvironmentResource.

## Declaration

```swift
@MainActor @preconcurrency convenience init(equirectangular cgImage: CGImage, withName resourceName: String? = nil) async throws
```

## Parameters

- `cgImage`: The source equirectangular (latitude, longitude) image. To preserve all details use an image where the width is half the height.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.
