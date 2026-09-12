> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrary/begingeneratinglibrarychangenotifications()](https://developer.apple.com/documentation/mediaplayer/mpmedialibrary/begingeneratinglibrarychangenotifications())

# beginGeneratingLibraryChangeNotifications() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the media library to turn on notifications for whenever the library changes.

## Declaration

```swift
func beginGeneratingLibraryChangeNotifications()
```

<a id="Discussion"></a>

## Discussion

This method is nestable, that is, you can call it multiple times. To turn off notifications, call [endGeneratingLibraryChangeNotifications()](endgeneratinglibrarychangenotifications%28%29.md) the same number of times that you called [beginGeneratingLibraryChangeNotifications()](begingeneratinglibrarychangenotifications%28%29.md).

## See Also

### Receiving notifications when the user’s library changes

- [endGeneratingLibraryChangeNotifications()](endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.
- [lastModifiedDate](lastmodifieddate.md): The calendar date on which the media library was last modified.

# beginGeneratingLibraryChangeNotifications (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the media library to turn on notifications for whenever the library changes.

## Declaration

```objectivec
- (void) beginGeneratingLibraryChangeNotifications;
```

<a id="Discussion"></a>

## Discussion

This method is nestable, that is, you can call it multiple times. To turn off notifications, call [endGeneratingLibraryChangeNotifications](endgeneratinglibrarychangenotifications%28%29.md) the same number of times that you called [beginGeneratingLibraryChangeNotifications](begingeneratinglibrarychangenotifications%28%29.md).

## See Also

### Receiving notifications when the user’s library changes

- [endGeneratingLibraryChangeNotifications](endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.
- [MPMediaLibraryDidChangeNotification](../mpmedialibrarydidchangenotification.md): Indicates the media library has changed.
- [lastModifiedDate](lastmodifieddate.md): The calendar date on which the media library was last modified.
