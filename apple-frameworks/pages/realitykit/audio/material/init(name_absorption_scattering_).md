> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audio/material/init(name:absorption:scattering:)

# init(name:absorption:scattering:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an audio material from absorption and scattering data.

## Declaration

```swift
init(name: String? = nil, absorption: Audio.Absorption, scattering: Audio.Scattering)
```

## Parameters

- `name`: An optional name for the material.
- `absorption`: The absorption characteristics of the material.
- `scattering`: The scattering characteristics of the material.
