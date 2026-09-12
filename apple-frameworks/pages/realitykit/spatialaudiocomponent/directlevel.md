> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialaudiocomponent/directlevel](https://developer.apple.com/documentation/realitykit/spatialaudiocomponent/directlevel)

# directLevel

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The level of the direct unreverberated signal that an entity emits.

## Declaration

```swift
var directLevel: Audio.Decibel { get set }
```

<a id="discussion"></a>

## Discussion

The direct level is in relative decibels, in the range `[-Decibel.infinity, Decibel.zero]`, where `Decibel.zero` is the default.
