> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ambientaudiocomponent/init(gain:)

# init(gain:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Configure the behavior of an ambient audio source.

## Declaration

```swift
init(gain: Audio.Decibel = .zero)
```

## Parameters

- `gain`: The overall level for all sounds emitted from an entity.
