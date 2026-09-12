> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackevent](https://developer.apple.com/documentation/tvmlkit/tvplaybackevent)

# TVPlaybackEvent (Swift)

**Framework:** TVMLKit  
**Kind:** Structure  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Extend this structure to send your custom playback events to the JavaScript environment.

> Please use SwiftUI or UIKit

## Declaration

```swift
struct TVPlaybackEvent
```

## Topics

### Initializers

- [init(\_:)](tvplaybackevent/init%28__%29.md): Deprecated.
- [init(rawValue:)](tvplaybackevent/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

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
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatch(event:userInfo:completion:)](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.

# TVPlaybackEvent (Objective-C)

**Framework:** TVMLKit  
**Kind:** Type Alias  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Extend this structure to send your custom playback events to the JavaScript environment.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
typedef NSString * TVPlaybackEvent;
```

## See Also

### Controlling Playback

- [next](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatchEvent:userInfo:completion:](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.
