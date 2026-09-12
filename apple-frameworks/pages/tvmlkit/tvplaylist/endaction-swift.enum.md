> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaylist/endaction-swift.enum](https://developer.apple.com/documentation/tvmlkit/tvplaylist/endaction-swift.enum)

# TVPlaylist.EndAction (Swift)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The actions that cause media playback to end.

> Please use SwiftUI or UIKit

## Declaration

```swift
enum EndAction
```

## Topics

### End Playback Reasons

- [TVPlaylist.EndAction.stop](endaction-swift.enum/stop.md): Deprecated. The player has stopped playback
- [TVPlaylist.EndAction.pause](endaction-swift.enum/pause.md): Deprecated. The player has paused playback.
- [TVPlaylist.EndAction.waitForMoreItems](endaction-swift.enum/waitformoreitems.md): Deprecated. The player is waiting for more media items.

### Initializers

- [init(rawValue:)](endaction-swift.enum/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving Playlist Information

- [mediaItems](mediaitems.md): Deprecated. An array of media items contained in the playlist.
- [userInfo](userinfo.md): Deprecated. User-defined metadata, like a developer-specific identifier, for a playlist.
- [repeatMode](repeatmode-swift.property.md): Deprecated. A mode that determines how media items are replayed.
- [TVPlaylist.RepeatMode](repeatmode-swift.enum.md): Deprecated. The modes that indicate how or whether media items can be replayed.
- [endAction](endaction-swift.property.md): Deprecated. An action that causes media playback to end.

# TVPlaylistEndAction (Objective-C)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The actions that cause media playback to end.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
enum TVPlaylistEndAction : NSInteger;
```

## Topics

### End Playback Reasons

- [TVPlaylistEndActionStop](endaction-swift.enum/stop.md): Deprecated. The player has stopped playback
- [TVPlaylistEndActionPause](endaction-swift.enum/pause.md): Deprecated. The player has paused playback.
- [TVPlaylistEndActionWaitForMoreItems](endaction-swift.enum/waitformoreitems.md): Deprecated. The player is waiting for more media items.

## See Also

### Retrieving Playlist Information

- [mediaItems](mediaitems.md): Deprecated. An array of media items contained in the playlist.
- [userInfo](userinfo.md): Deprecated. User-defined metadata, like a developer-specific identifier, for a playlist.
- [repeatMode](repeatmode-swift.property.md): Deprecated. A mode that determines how media items are replayed.
- [TVPlaylistRepeatMode](repeatmode-swift.enum.md): Deprecated. The modes that indicate how or whether media items can be replayed.
- [endAction](endaction-swift.property.md): Deprecated. An action that causes media playback to end.
