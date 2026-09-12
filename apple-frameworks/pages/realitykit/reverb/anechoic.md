> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverb/anechoic](https://developer.apple.com/documentation/realitykit/reverb/anechoic)

# anechoic

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A reverb instance that applies no reverberation to spatial audio sources.

## Declaration

```swift
static let anechoic: Reverb
```

<a id="discussion"></a>

## Discussion

> **Warning**

> [anechoic](anechoic.md) will cause spatial audio sources to lose externalization, or the sense that an audio source is in a person’s space. Only use this case when when the immersive environment is abstract or otherwise unrealistic.
