> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrary/lastmodifieddate](https://developer.apple.com/documentation/mediaplayer/mpmedialibrary/lastmodifieddate)

# lastModifiedDate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The calendar date on which the media library was last modified.

## Declaration

```swift
var lastModifiedDate: Date { get }
```

## See Also

### Receiving notifications when the user’s library changes

- [beginGeneratingLibraryChangeNotifications()](begingeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn on notifications for whenever the library changes.
- [endGeneratingLibraryChangeNotifications()](endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.

# lastModifiedDate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The calendar date on which the media library was last modified.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * lastModifiedDate;
```

## See Also

### Receiving notifications when the user’s library changes

- [beginGeneratingLibraryChangeNotifications](begingeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn on notifications for whenever the library changes.
- [endGeneratingLibraryChangeNotifications](endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.
- [MPMediaLibraryDidChangeNotification](../mpmedialibrarydidchangenotification.md): Indicates the media library has changed.
