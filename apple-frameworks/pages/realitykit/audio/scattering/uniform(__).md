> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audio/scattering/uniform(_:)

# uniform(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a scattering data set with the coefficient applied uniformly for every frequency.

## Declaration

```swift
static func uniform(_ coefficient: Float) -> Audio.Scattering
```

## Parameters

- `coefficient`: The scattering coefficient to apply across all frequency bands.
