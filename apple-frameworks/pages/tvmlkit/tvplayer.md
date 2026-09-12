> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplayer](https://developer.apple.com/documentation/tvmlkit/tvplayer)

# TVPlayer (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVPlayer
```

<a id="overview"></a>

## Overview

You create a new `TVPlayer` object using your custom [AVPlayer](../avfoundation/avplayer.md) object. You can then play media items that are associated with the JavaScript media player using the new player. For example, you can add gestures, overlays, and other custom features to your TV player.

## Topics

### Setting Up the Player

- [init(player:)](tvplayer/init%28player_%29.md): Deprecated. Creates a new customizable player from an existing player.
- [player](tvplayer/player.md): Deprecated. The customizable media player.
- [playlist](tvplayer/playlist.md): Deprecated. The playlist for the media player.

### Controlling Playback

- [next()](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause()](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous()](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatch(event:userInfo:completion:)](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.

### Inspecting Media Items

- [setCurrentMediaItem(toItemAtIndex:)](tvplayer/setcurrentmediaitem%28toitematindex_%29.md): Deprecated. Sets the current media item to the designated media item.
- [previousMediaItem](tvplayer/previousmediaitem.md): Deprecated. The previously selected media item.
- [currentMediaItem](tvplayer/currentmediaitem.md): Deprecated. The currently selected media item.
- [nextMediaItem](tvplayer/nextmediaitem.md): Deprecated. The next media item in the playlist.

### Instance Methods

- [present(animated:)](tvplayer/present%28animated_%29.md): Deprecated.

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

## See Also

### Custom Player

- [TVMediaItem](tvmediaitem.md): Deprecated. A single audio or video item associated with the Apple TV JavaScript player.
- [TVPlaylist](tvplaylist.md): Deprecated. A collection of media items associated with the Apple TV JavaScript player.

# TVPlayer (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVPlayer : NSObject
```

<a id="overview"></a>

## Overview

You create a new `TVPlayer` object using your custom [AVPlayer](../avfoundation/avplayer.md) object. You can then play media items that are associated with the JavaScript media player using the new player. For example, you can add gestures, overlays, and other custom features to your TV player.

## Topics

### Setting Up the Player

- [initWithPlayer:](tvplayer/init%28player_%29.md): Deprecated. Creates a new customizable player from an existing player.
- [player](tvplayer/player.md): Deprecated. The customizable media player.
- [playlist](tvplayer/playlist.md): Deprecated. The playlist for the media player.

### Controlling Playback

- [next](tvplayer/next%28%29.md): Deprecated. Plays the next media item in the playlist.
- [pause](tvplayer/pause%28%29.md): Deprecated. Pauses the currently playing item.
- [previous](tvplayer/previous%28%29.md): Deprecated. Plays the previous media item in the playlist.
- [state](tvplayer/state.md): Deprecated. The current state of the player.
- [TVPlaybackState](tvplaybackstate.md): Deprecated. The possible states of a player.
- [dispatchEvent:userInfo:completion:](tvplayer/dispatch%28event_userinfo_completion_%29.md): Deprecated. Dispatches custom playback events to the JavaScript environment.
- [TVPlaybackEvent](tvplaybackevent.md): Deprecated. Extend this structure to send your custom playback events to the JavaScript environment.
- [TVPlaybackEventMarshaling](tvplaybackeventmarshaling.md): Deprecated. A protocol used for sending and receiving information across the JavaScript bridge.
- [TVPlaybackCustomEventUserInfo](tvplaybackcustomeventuserinfo.md): Deprecated. The user information used in a custom playback event.

### Inspecting Media Items

- [changeToMediaItemAtIndex:](tvplayer/setcurrentmediaitem%28toitematindex_%29.md): Deprecated. Sets the current media item to the designated media item.
- [previousMediaItem](tvplayer/previousmediaitem.md): Deprecated. The previously selected media item.
- [currentMediaItem](tvplayer/currentmediaitem.md): Deprecated. The currently selected media item.
- [nextMediaItem](tvplayer/nextmediaitem.md): Deprecated. The next media item in the playlist.

### Instance Methods

- [presentWithAnimation:](tvplayer/present%28animated_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom Player

- [TVMediaItem](tvmediaitem.md): Deprecated. A single audio or video item associated with the Apple TV JavaScript player.
- [TVPlaylist](tvplaylist.md): Deprecated. A collection of media items associated with the Apple TV JavaScript player.
