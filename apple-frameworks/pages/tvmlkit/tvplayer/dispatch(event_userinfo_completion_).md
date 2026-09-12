> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplayer/dispatch(event:userinfo:completion:)](https://developer.apple.com/documentation/tvmlkit/tvplayer/dispatch(event:userinfo:completion:))

# dispatch(event:userInfo:completion:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Dispatches custom playback events to the JavaScript environment.

> Please use SwiftUI or UIKit

## Declaration

```swift
func dispatch(event: TVPlaybackEvent, userInfo: (any TVPlaybackEventMarshaling)?, completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func dispatch(event: TVPlaybackEvent, userInfo: (any TVPlaybackEventMarshaling)?) async -> Bool
```

## Parameters

- `event`: The custom playback event to be dispatched.
- `userInfo`: The user information for the custom event.
- `completion`: A block that is called after the event has been dispatched. Contains the information required to process the event’s results.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dispatch(event: TVPlaybackEvent, userInfo: (any TVPlaybackEventMarshaling)?) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Controlling Playback

- [next()](next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause()](pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous()](previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](state.md): Deprecated. The current state of the player.
- [TVPlaybackState](../tvplaybackstate.md): Deprecated. The possible states of a player.
- [TVPlaybackEvent](../tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](../tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](../tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.

# dispatchEvent:userInfo:completion: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Dispatches custom playback events to the JavaScript environment.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) dispatchEvent:(TVPlaybackEvent) event userInfo:(id<TVPlaybackEventMarshaling>) userInfo completion:(void (^)(BOOL evaluated)) completion;
```

## Parameters

- `event`: The custom playback event to be dispatched.
- `userInfo`: The user information for the custom event.
- `completion`: A block that is called after the event has been dispatched. Contains the information required to process the event’s results.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dispatch(event: TVPlaybackEvent, userInfo: (any TVPlaybackEventMarshaling)?) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Controlling Playback

- [next](next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause](pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous](previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](state.md): Deprecated. The current state of the player.
- [TVPlaybackState](../tvplaybackstate.md): Deprecated. The possible states of a player.
- [TVPlaybackEvent](../tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](../tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](../tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.
