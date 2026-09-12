> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaybackcustomeventuserinfo](https://developer.apple.com/documentation/tvmlkit/tvplaybackcustomeventuserinfo)

# TVPlaybackCustomEventUserInfo (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The user information used in a custom playback event.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVPlaybackCustomEventUserInfo
```

## Topics

### Creating User Info for Custom Playback Events

- [init(properties:expectsReturnValue:)](tvplaybackcustomeventuserinfo/init%28properties_expectsreturnvalue_%29.md): Deprecated. Create a new custom playback event user info dictionary.
- [TVPlaybackEventProperty](tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.
- [expectsReturnValue](tvplaybackcustomeventuserinfo/expectsreturnvalue.md): Deprecated. A Boolean value that indicates whether the custom event expects to contain a return value.
- [returnValue](tvplaybackcustomeventuserinfo/returnvalue.md): Deprecated. The return value type for the custom event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md)

## See Also

### Controlling Playback

- [next()](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause()](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous()](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatch(event:userInfo:completion:)](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.

# TVPlaybackCustomEventUserInfo (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The user information used in a custom playback event.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVPlaybackCustomEventUserInfo : NSObject
```

## Topics

### Creating User Info for Custom Playback Events

- [initWithProperties:expectsReturnValue:](tvplaybackcustomeventuserinfo/init%28properties_expectsreturnvalue_%29.md): Deprecated. Create a new custom playback event user info dictionary.
- [TVPlaybackEventProperty](tvplaybackeventproperty.md): Deprecated. Extend this structure to create your own custom playback event properties.
- [expectsReturnValue](tvplaybackcustomeventuserinfo/expectsreturnvalue.md): Deprecated. A Boolean value that indicates whether the custom event expects to contain a return value.
- [returnValue](tvplaybackcustomeventuserinfo/returnvalue.md): Deprecated. The return value type for the custom event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md)

## See Also

### Controlling Playback

- [next](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatchEvent:userInfo:completion:](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
