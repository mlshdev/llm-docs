> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/cue-swift.struct/nocue](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/cue-swift.struct/nocue)

# noCue (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A cue that indicates that playback starts at the interstitial event time or date.

## Declaration

```swift
static let noCue: AVPlayerInterstitialEvent.Cue
```

## See Also

### Cues

- [joinCue](joincue.md): A cue that indicates that playback occurs before starting primary playback, regardless of initial primary playback position.
- [leaveCue](leavecue.md): A cue that indicates event playback occurs after primary playback ends without error, either at the end of the primary asset or at the client-specified forward playback end time.

# AVPlayerInterstitialEventNoCue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A cue that indicates that playback starts at the interstitial event time or date.

## Declaration

```objectivec
extern AVPlayerInterstitialEventCue const AVPlayerInterstitialEventNoCue;
```

## See Also

### Cues

- [AVPlayerInterstitialEventJoinCue](joincue.md): A cue that indicates that playback occurs before starting primary playback, regardless of initial primary playback position.
- [AVPlayerInterstitialEventLeaveCue](leavecue.md): A cue that indicates event playback occurs after primary playback ends without error, either at the end of the primary asset or at the client-specified forward playback end time.
