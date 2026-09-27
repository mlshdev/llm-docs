> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/channelaudiocomponent/init(gain:)

# init(gain:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Configure the behavior of a channel audio source.

## Declaration

```swift
init(gain: Audio.Decibel = .zero)
```

## Parameters

- `gain`: The overall level for all sounds emitted from an entity.
