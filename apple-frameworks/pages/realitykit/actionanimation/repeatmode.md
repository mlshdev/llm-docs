> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation/repeatmode](https://developer.apple.com/documentation/realitykit/actionanimation/repeatmode)

# repeatMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An option that determines how the animation repeats.

## Declaration

```swift
var repeatMode: AnimationRepeatMode { get set }
```

<a id="discussion"></a>

## Discussion

If you call `AnimationAction/trimmed(start:end:duration:)` with a `start` or `end` that lies outside of the timeline defined by `AnimationAction/duration`, the animation fills the additional playback by applying this property.
