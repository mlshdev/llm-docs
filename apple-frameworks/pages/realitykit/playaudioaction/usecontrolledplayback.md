> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/playaudioaction/usecontrolledplayback](https://developer.apple.com/documentation/realitykit/playaudioaction/usecontrolledplayback)

# useControlledPlayback

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean that indicates whether this action has control over the playback of the audio.

## Declaration

```swift
var useControlledPlayback: Bool
```

<a id="discussion"></a>

## Discussion

Setting the value of this property to true indicates the action has control over the playback of the audio. Setting this to false indicates the audio plays independently from the action, behaving like a one shot audio.
