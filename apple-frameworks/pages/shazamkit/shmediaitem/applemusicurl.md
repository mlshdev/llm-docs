> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/applemusicurl](https://developer.apple.com/documentation/shazamkit/shmediaitem/applemusicurl)

# appleMusicURL (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A link to the Apple Music page that contains the full information for the song.

## Declaration

```swift
var appleMusicURL: URL? { get }
```

## See Also

### Reading Apple Music properties

- [songs](songs.md): Deprecated. An array of MusicKit song objects that represent the song.
- [appleMusicID](applemusicid.md): The Apple Music ID for the song.

# appleMusicURL (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A link to the Apple Music page that contains the full information for the song.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURL * appleMusicURL;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSURL * appleMusicURL;
```

## See Also

### Reading Apple Music properties

- [appleMusicID](applemusicid.md): The Apple Music ID for the song.
