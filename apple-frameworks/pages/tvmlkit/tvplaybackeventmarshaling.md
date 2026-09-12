> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackeventmarshaling](https://developer.apple.com/documentation/tvmlkit/tvplaybackeventmarshaling)

# TVPlaybackEventMarshaling (Swift)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A protocol used for sending and receiving information across the JavaScript bridge.

> Please use SwiftUI or UIKit

## Declaration

```swift
protocol TVPlaybackEventMarshaling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You must conform to this protocol in order to pass custom events.

## Topics

### Processing Playback Events

- [processReturnValue(value:in:)](tvplaybackeventmarshaling/processreturnvalue%28value_in_%29.md): Deprecated. Converts a JavaScript value into a value that is readable in Swift or Objective-C.
- [properties](tvplaybackeventmarshaling/properties.md): Deprecated. An array of custom playback event properties.
- [TVPlaybackEventProperty](tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md)

## See Also

### Controlling Playback

- [next()](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause()](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous()](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatch(event:userInfo:completion:)](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.

# TVPlaybackEventMarshaling (Objective-C)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A protocol used for sending and receiving information across the JavaScript bridge.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@protocol TVPlaybackEventMarshaling <NSObject>
```

<a id="overview"></a>

## Overview

You must conform to this protocol in order to pass custom events.

## Topics

### Processing Playback Events

- [processReturnJSValue:inContext:](tvplaybackeventmarshaling/processreturnvalue%28value_in_%29.md): Deprecated. Converts a JavaScript value into a value that is readable in Swift or Objective-C.
- [properties](tvplaybackeventmarshaling/properties.md): Deprecated. An array of custom playback event properties.
- [TVPlaybackEventProperty](tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md)

## See Also

### Controlling Playback

- [next](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatchEvent:userInfo:completion:](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.
