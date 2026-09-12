> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/cameraregionview/init(iscontrastandvibrancyenhancementenabled:pixelbufferprocessor:)](https://developer.apple.com/documentation/visionkit/cameraregionview/init(iscontrastandvibrancyenhancementenabled:pixelbufferprocessor:))

# init(isContrastAndVibrancyEnhancementEnabled:pixelBufferProcessor:)

**Framework:** VisionKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a view that renders a spatial camera region and optionally applies contrast enhancement.

## Declaration

```swift
@MainActor @preconcurrency init(isContrastAndVibrancyEnhancementEnabled: Bool = false, pixelBufferProcessor: (@Sendable (Result<CameraRegionView.PixelBufferProcessingContext, any Error>) async -> CVReadOnlyPixelBuffer?)? = nil)
```

## Parameters

- `isContrastAndVibrancyEnhancementEnabled`: Enabling this value improves the overall visual richness and contrast of the frames.
- `pixelBufferProcessor`: Provides CVReadOnlyPixelBuffer for any additional modifications that may need to be applied to the pixel buffer before rendering the pixel buffer on the view. Any modification requires the creation of a new CVReadOnlyPixelBuffer. Be mindful of the high computational cost since it would impact the frame rate. Returning `nil` will ignore the received frame.
