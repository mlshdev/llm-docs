> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/texturesamplingquality/normal

# TextureSamplingQuality.normal

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Computes with regular sampling rates.

## Declaration

```swift
case normal
```

## See Also

### Specifying the sampling quality

- [TextureSamplingQuality.low](low.md): Low sampling rates can result in higher noise in high-frequency areas and banding in low-frequency gradients.
- [TextureSamplingQuality.high](high.md): Computes with high sampling rates, reducing texture noise in high-frequency areas.
- [TextureSamplingQuality.veryHigh](veryhigh.md): Computes with very high sampling rates.
