> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiomixgroup/gain](https://developer.apple.com/documentation/realitykit/audiomixgroup/gain)

# gain

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The overall level for all sounds of an audio mix group in relative decibels.

## Declaration

```swift
var gain: Audio.Decibel { get set }
```

<a id="discussion"></a>

## Discussion

The gain is a value in the range `[-.infinity, .zero]`, where `-.infinity` is silent and `.zero` is nominal.
