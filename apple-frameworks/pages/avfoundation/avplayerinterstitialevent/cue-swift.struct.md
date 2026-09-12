> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/cue-swift.struct](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/cue-swift.struct)

# AVPlayerInterstitialEvent.Cue (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that defines standard cues to play interstitial content.

## Declaration

```swift
struct Cue
```

## Topics

### Cues

- [noCue](cue-swift.struct/nocue.md): A cue that indicates that playback starts at the interstitial event time or date.
- [joinCue](cue-swift.struct/joincue.md): A cue that indicates that playback occurs before starting primary playback, regardless of initial primary playback position.
- [leaveCue](cue-swift.struct/leavecue.md): A cue that indicates event playback occurs after primary playback ends without error, either at the end of the primary asset or at the client-specified forward playback end time.

### Initializers

- [init(rawValue:)](cue-swift.struct/init%28rawvalue_%29.md): Creates an interstitial event cue from its raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring cues

- [cue](cue-swift.property.md): A cue to schedule interstitial event playback at a predefined position during primary playback.

# AVPlayerInterstitialEventCue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that defines standard cues to play interstitial content.

## Declaration

```objectivec
typedef NSString * AVPlayerInterstitialEventCue;
```

## Topics

### Cues

- [AVPlayerInterstitialEventNoCue](cue-swift.struct/nocue.md): A cue that indicates that playback starts at the interstitial event time or date.
- [AVPlayerInterstitialEventJoinCue](cue-swift.struct/joincue.md): A cue that indicates that playback occurs before starting primary playback, regardless of initial primary playback position.
- [AVPlayerInterstitialEventLeaveCue](cue-swift.struct/leavecue.md): A cue that indicates event playback occurs after primary playback ends without error, either at the end of the primary asset or at the client-specified forward playback end time.

## See Also

### Configuring cues

- [cue](cue-swift.property.md): A cue to schedule interstitial event playback at a predefined position during primary playback.
