> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialaudiocomponent/reverblevel](https://developer.apple.com/documentation/realitykit/spatialaudiocomponent/reverblevel)

# reverbLevel

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The level of reverberated signal that an entity emits.

## Declaration

```swift
var reverbLevel: Audio.Decibel { get set }
```

<a id="discussion"></a>

## Discussion

The reverb level is in relative decibels, in the range  `[-Decibel.infinity, Decibel.zero]`, where `Decibel.zero` is the default.

Reduce this value to make the sounds less reverberant and more intimate. Reduce this value to `-Decibel.infinity` to cause the sounds to collapse into the head of the listener.
