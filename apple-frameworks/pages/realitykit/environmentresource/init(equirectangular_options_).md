> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/environmentresource/init(equirectangular:options:)

# init(equirectangular:options:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously generates an environment resource from an equirectangular image.

## Declaration

```swift
@MainActor convenience init(equirectangular cgImage: CGImage, options: EnvironmentResource.CreateOptions) async throws
```

## Parameters

- `cgImage`: The source equirectangular (latitude, longitude) image. To preserve all details use an image where the width is half the height.
