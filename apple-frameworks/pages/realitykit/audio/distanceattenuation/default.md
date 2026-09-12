> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/distanceattenuation/default](https://developer.apple.com/documentation/realitykit/audio/distanceattenuation/default)

# default

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The default distance attenuation, which uses a rolloff model that mimics real-world physics.

## Declaration

```swift
static let `default`: Audio.DistanceAttenuation
```

<a id="discussion"></a>

## Discussion

The [Audio.DistanceAttenuation.rolloff(factor:)](rolloff%28factor_%29.md) model attenuates spatial audio with a factor of `1.0` as the listener moves away from the source.
