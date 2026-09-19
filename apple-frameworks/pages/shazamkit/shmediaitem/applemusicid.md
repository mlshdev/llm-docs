> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shmediaitem/applemusicid

# appleMusicID (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The Apple Music ID for the song.

## Declaration

```swift
var appleMusicID: String? { get }
```

## See Also

### Reading Apple Music properties

- [songs](songs.md): Deprecated. An array of MusicKit song objects that represent the song.
- [appleMusicURL](applemusicurl.md): A link to the Apple Music page that contains the full information for the song.

# appleMusicID (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The Apple Music ID for the song.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * appleMusicID;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * appleMusicID;
```

## See Also

### Reading Apple Music properties

- [appleMusicURL](applemusicurl.md): A link to the Apple Music page that contains the full information for the song.
