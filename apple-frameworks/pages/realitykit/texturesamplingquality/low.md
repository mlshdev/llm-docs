> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/texturesamplingquality/low

# TextureSamplingQuality.low

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Low sampling rates can result in higher noise in high-frequency areas and banding in low-frequency gradients.

## Declaration

```swift
case low
```

## See Also

### Specifying the sampling quality

- [TextureSamplingQuality.normal](normal.md): Computes with regular sampling rates.
- [TextureSamplingQuality.high](high.md): Computes with high sampling rates, reducing texture noise in high-frequency areas.
- [TextureSamplingQuality.veryHigh](veryhigh.md): Computes with very high sampling rates.
