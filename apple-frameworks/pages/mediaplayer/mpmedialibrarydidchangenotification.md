> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrarydidchangenotification](https://developer.apple.com/documentation/mediaplayer/mpmedialibrarydidchangenotification)

# MPMediaLibraryDidChangeNotification

**Interface language:** Objective-C

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Indicates the media library has changed.

## Declaration

```objectivec
extern NSString * const MPMediaLibraryDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

When the system posts this notification, your app should reevaluate items or playlists that you previously cached.

## See Also

### Receiving notifications when the user’s library changes

- [beginGeneratingLibraryChangeNotifications](mpmedialibrary/begingeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn on notifications for whenever the library changes.
- [endGeneratingLibraryChangeNotifications](mpmedialibrary/endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.
- [lastModifiedDate](mpmedialibrary/lastmodifieddate.md): The calendar date on which the media library was last modified.
