> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvplaylist/userinfo](https://developer.apple.com/documentation/tvmlkit/tvplaylist/userinfo)

# userInfo (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

User-defined metadata, like a developer-specific identifier, for a playlist.

> Please use SwiftUI or UIKit

## Declaration

```swift
var userInfo: [String : Any]? { get }
```

## See Also

### Retrieving Playlist Information

- [mediaItems](mediaitems.md): Deprecated. An array of media items contained in the playlist.
- [repeatMode](repeatmode-swift.property.md): Deprecated. A mode that determines how media items are replayed.
- [TVPlaylist.RepeatMode](repeatmode-swift.enum.md): Deprecated. The modes that indicate how or whether media items can be replayed.
- [endAction](endaction-swift.property.md): Deprecated. An action that causes media playback to end.
- [TVPlaylist.EndAction](endaction-swift.enum.md): Deprecated. The actions that cause media playback to end.

# userInfo (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

User-defined metadata, like a developer-specific identifier, for a playlist.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary<NSString *,id> * userInfo;
```

## See Also

### Retrieving Playlist Information

- [mediaItems](mediaitems.md): Deprecated. An array of media items contained in the playlist.
- [repeatMode](repeatmode-swift.property.md): Deprecated. A mode that determines how media items are replayed.
- [TVPlaylistRepeatMode](repeatmode-swift.enum.md): Deprecated. The modes that indicate how or whether media items can be replayed.
- [endAction](endaction-swift.property.md): Deprecated. An action that causes media playback to end.
- [TVPlaylistEndAction](endaction-swift.enum.md): Deprecated. The actions that cause media playback to end.
