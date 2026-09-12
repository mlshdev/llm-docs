> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/cue-swift.struct/leavecue](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/cue-swift.struct/leavecue)

# leaveCue (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A cue that indicates event playback occurs after primary playback ends without error, either at the end of the primary asset or at the client-specified forward playback end time.

## Declaration

```swift
static let leaveCue: AVPlayerInterstitialEvent.Cue
```

## See Also

### Cues

- [noCue](nocue.md): A cue that indicates that playback starts at the interstitial event time or date.
- [joinCue](joincue.md): A cue that indicates that playback occurs before starting primary playback, regardless of initial primary playback position.

# AVPlayerInterstitialEventLeaveCue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A cue that indicates event playback occurs after primary playback ends without error, either at the end of the primary asset or at the client-specified forward playback end time.

## Declaration

```objectivec
extern AVPlayerInterstitialEventCue const AVPlayerInterstitialEventLeaveCue;
```

## See Also

### Cues

- [AVPlayerInterstitialEventNoCue](nocue.md): A cue that indicates that playback starts at the interstitial event time or date.
- [AVPlayerInterstitialEventJoinCue](joincue.md): A cue that indicates that playback occurs before starting primary playback, regardless of initial primary playback position.
