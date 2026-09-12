> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ambientaudiocomponent/gain](https://developer.apple.com/documentation/realitykit/ambientaudiocomponent/gain)

# gain

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The overall level for all sounds emitted from an entity.

## Declaration

```swift
var gain: Audio.Decibel { get set }
```

<a id="discussion"></a>

## Discussion

In relative Decibels, in the range  `-.infinity ... .zero` where `.zero` is the default.
