> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/shazamid](https://developer.apple.com/documentation/shazamkit/shmediaitem/shazamid)

# shazamID (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The Shazam ID for the song.

## Declaration

```swift
var shazamID: String? { get }
```

## See Also

### Working with Shazam music catalog media items

- [webURL](weburl.md): A link to the Shazam Music catalog page that contains the full information for the song.
- [fetch(shazamID:completionHandler:)](fetch%28shazamid_completionhandler_%29.md): Requests the media item for the song with the specified Shazam ID.

# shazamID (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The Shazam ID for the song.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * shazamID;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * shazamID;
```

## See Also

### Working with Shazam music catalog media items

- [webURL](weburl.md): A link to the Shazam Music catalog page that contains the full information for the song.
- [fetchMediaItemWithShazamID:completionHandler:](fetch%28shazamid_completionhandler_%29.md): Requests the media item for the song with the specified Shazam ID.
