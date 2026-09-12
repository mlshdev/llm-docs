> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeraudiovisualbackgroundplaybackpolicy](https://developer.apple.com/documentation/avfoundation/avplayeraudiovisualbackgroundplaybackpolicy)

# AVPlayerAudiovisualBackgroundPlaybackPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Policies that describe playback behavior when an app transitions to the background while playing video.

## Declaration

```swift
enum AVPlayerAudiovisualBackgroundPlaybackPolicy
```

## Topics

### Policies

- [AVPlayerAudiovisualBackgroundPlaybackPolicy.automatic](avplayeraudiovisualbackgroundplaybackpolicy/automatic.md): The system decides whether playback continues.
- [AVPlayerAudiovisualBackgroundPlaybackPolicy.continuesIfPossible](avplayeraudiovisualbackgroundplaybackpolicy/continuesifpossible.md): The app continues playback, if possible.
- [AVPlayerAudiovisualBackgroundPlaybackPolicy.pauses](avplayeraudiovisualbackgroundplaybackpolicy/pauses.md): The app pauses playback.

### Initializers

- [init(rawValue:)](avplayeraudiovisualbackgroundplaybackpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring background playback

- [audiovisualBackgroundPlaybackPolicy](avplayer/audiovisualbackgroundplaybackpolicy.md): A policy that determines how playback of audiovisual media continues when the app transitions to the background.

# AVPlayerAudiovisualBackgroundPlaybackPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Policies that describe playback behavior when an app transitions to the background while playing video.

## Declaration

```objectivec
enum AVPlayerAudiovisualBackgroundPlaybackPolicy : NSInteger;
```

## Topics

### Policies

- [AVPlayerAudiovisualBackgroundPlaybackPolicyAutomatic](avplayeraudiovisualbackgroundplaybackpolicy/automatic.md): The system decides whether playback continues.
- [AVPlayerAudiovisualBackgroundPlaybackPolicyContinuesIfPossible](avplayeraudiovisualbackgroundplaybackpolicy/continuesifpossible.md): The app continues playback, if possible.
- [AVPlayerAudiovisualBackgroundPlaybackPolicyPauses](avplayeraudiovisualbackgroundplaybackpolicy/pauses.md): The app pauses playback.

## See Also

### Configuring background playback

- [audiovisualBackgroundPlaybackPolicy](avplayer/audiovisualbackgroundplaybackpolicy.md): A policy that determines how playback of audiovisual media continues when the app transitions to the background.
