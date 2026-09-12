> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaylist](https://developer.apple.com/documentation/tvmlkit/tvplaylist)

# TVPlaylist (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A collection of media items associated with the Apple TV JavaScript player.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVPlaylist
```

<a id="overview"></a>

## Overview

A `TVPlaylist` object contains read-only information about a playlist associated with the JavaScript player. You can use this information with your own custom [AVPlayer](../avfoundation/avplayer.md) objects exposed through a [TVPlayer](tvplayer.md) object. For example, you can retrieve album information from the JavaScript player and play the track through a `TVPlayer` object.

## Topics

### Retrieving Playlist Information

- [mediaItems](tvplaylist/mediaitems.md): Deprecated. An array of media items contained in the playlist.
- [userInfo](tvplaylist/userinfo.md): Deprecated. User-defined metadata, like a developer-specific identifier, for a playlist.
- [repeatMode](tvplaylist/repeatmode-swift.property.md): Deprecated. A mode that determines how media items are replayed.
- [TVPlaylist.RepeatMode](tvplaylist/repeatmode-swift.enum.md): Deprecated. The modes that indicate how or whether media items can be replayed.
- [endAction](tvplaylist/endaction-swift.property.md): Deprecated. An action that causes media playback to end.
- [TVPlaylist.EndAction](tvplaylist/endaction-swift.enum.md): Deprecated. The actions that cause media playback to end.

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
- [TVPlayer](tvplayer.md): Deprecated. A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.

# TVPlaylist (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A collection of media items associated with the Apple TV JavaScript player.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVPlaylist : NSObject
```

<a id="overview"></a>

## Overview

A `TVPlaylist` object contains read-only information about a playlist associated with the JavaScript player. You can use this information with your own custom [AVPlayer](../avfoundation/avplayer.md) objects exposed through a [TVPlayer](tvplayer.md) object. For example, you can retrieve album information from the JavaScript player and play the track through a `TVPlayer` object.

## Topics

### Retrieving Playlist Information

- [mediaItems](tvplaylist/mediaitems.md): Deprecated. An array of media items contained in the playlist.
- [userInfo](tvplaylist/userinfo.md): Deprecated. User-defined metadata, like a developer-specific identifier, for a playlist.
- [repeatMode](tvplaylist/repeatmode-swift.property.md): Deprecated. A mode that determines how media items are replayed.
- [TVPlaylistRepeatMode](tvplaylist/repeatmode-swift.enum.md): Deprecated. The modes that indicate how or whether media items can be replayed.
- [endAction](tvplaylist/endaction-swift.property.md): Deprecated. An action that causes media playback to end.
- [TVPlaylistEndAction](tvplaylist/endaction-swift.enum.md): Deprecated. The actions that cause media playback to end.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom Player

- [TVMediaItem](tvmediaitem.md): Deprecated. A single audio or video item associated with the Apple TV JavaScript player.
- [TVPlayer](tvplayer.md): Deprecated. A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.
