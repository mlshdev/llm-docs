> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/weburl](https://developer.apple.com/documentation/shazamkit/shmediaitem/weburl)

# webURL (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A link to the Shazam Music catalog page that contains the full information for the song.

## Declaration

```swift
var webURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This link opens the Shazam app or App Clip if it’s available on the device.

## See Also

### Working with Shazam music catalog media items

- [shazamID](shazamid.md): The Shazam ID for the song.
- [fetch(shazamID:completionHandler:)](fetch%28shazamid_completionhandler_%29.md): Requests the media item for the song with the specified Shazam ID.

# webURL (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A link to the Shazam Music catalog page that contains the full information for the song.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURL * webURL;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSURL * webURL;
```

<a id="Discussion"></a>

## Discussion

This link opens the Shazam app or App Clip if it’s available on the device.

## See Also

### Working with Shazam music catalog media items

- [shazamID](shazamid.md): The Shazam ID for the song.
- [fetchMediaItemWithShazamID:completionHandler:](fetch%28shazamid_completionhandler_%29.md): Requests the media item for the song with the specified Shazam ID.
