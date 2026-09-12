> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackstate](https://developer.apple.com/documentation/tvmlkit/tvplaybackstate)

# TVPlaybackState (Swift)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The possible states of a player.

> Please use SwiftUI or UIKit

## Declaration

```swift
enum TVPlaybackState
```

## Topics

### Playback States

- [TVPlaybackState.undefined](tvplaybackstate/undefined.md): Deprecated. The playback state of the player is undefined.
- [TVPlaybackState.begin](tvplaybackstate/begin.md): Deprecated. The player is beginning playback.
- [TVPlaybackState.loading](tvplaybackstate/loading.md): Deprecated. The player is loading a media item.
- [TVPlaybackState.playing](tvplaybackstate/playing.md): Deprecated. The player is currently playing.
- [TVPlaybackState.paused](tvplaybackstate/paused.md): Deprecated. The player paused playback.
- [TVPlaybackState.scanning](tvplaybackstate/scanning.md): Deprecated. The player is quickly scanning forwards or backwards.
- [TVPlaybackState.fastForwarding](tvplaybackstate/fastforwarding.md): Deprecated. The player is fast-forwarding.
- [TVPlaybackState.rewinding](tvplaybackstate/rewinding.md): Deprecated. The player is rewinding.
- [TVPlaybackState.end](tvplaybackstate/end.md): Deprecated. The player ended playback.

### Initializers

- [init(rawValue:)](tvplaybackstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling Playback

- [next()](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause()](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous()](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [dispatch(event:userInfo:completion:)](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.

# TVPlaybackState (Objective-C)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The possible states of a player.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
enum TVPlaybackState : NSInteger;
```

## Topics

### Playback States

- [TVPlaybackStateUndefined](tvplaybackstate/undefined.md): Deprecated. The playback state of the player is undefined.
- [TVPlaybackStateBegin](tvplaybackstate/begin.md): Deprecated. The player is beginning playback.
- [TVPlaybackStateLoading](tvplaybackstate/loading.md): Deprecated. The player is loading a media item.
- [TVPlaybackStatePlaying](tvplaybackstate/playing.md): Deprecated. The player is currently playing.
- [TVPlaybackStatePaused](tvplaybackstate/paused.md): Deprecated. The player paused playback.
- [TVPlaybackStateScanning](tvplaybackstate/scanning.md): Deprecated. The player is quickly scanning forwards or backwards.
- [TVPlaybackStateFastForwarding](tvplaybackstate/fastforwarding.md): Deprecated. The player is fast-forwarding.
- [TVPlaybackStateRewinding](tvplaybackstate/rewinding.md): Deprecated. The player is rewinding.
- [TVPlaybackStateEnd](tvplaybackstate/end.md): Deprecated. The player ended playback.

## See Also

### Controlling Playback

- [next](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [dispatchEvent:userInfo:completion:](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.
