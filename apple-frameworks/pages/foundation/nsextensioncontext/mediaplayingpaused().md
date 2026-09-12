> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/mediaplayingpaused()](https://developer.apple.com/documentation/foundation/nsextensioncontext/mediaplayingpaused())

# mediaPlayingPaused() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells the system that the Notification Content app extension stopped playing a media file.

## Declaration

```swift
func mediaPlayingPaused()
```

<a id="Discussion"></a>

## Discussion

In your Notification Content app extension code, call this method when you programmatically stop playing a media file. When called, the system updates the appearance of the media playback button displayed in the notification content extension’s interface. For more information about implementing a notification content extension, see [UNNotificationContentExtension](../../usernotificationsui/unnotificationcontentextension.md).

## See Also

### Controlling media playback in notification content extensions

- [mediaPlayingStarted()](mediaplayingstarted%28%29.md): Tells the system that the Notification Content app extension began playing a media file.

# mediaPlayingPaused (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells the system that the Notification Content app extension stopped playing a media file.

## Declaration

```objectivec
- (void) mediaPlayingPaused;
```

<a id="Discussion"></a>

## Discussion

In your Notification Content app extension code, call this method when you programmatically stop playing a media file. When called, the system updates the appearance of the media playback button displayed in the notification content extension’s interface. For more information about implementing a notification content extension, see [UNNotificationContentExtension](../../usernotificationsui/unnotificationcontentextension.md).

## See Also

### Controlling media playback in notification content extensions

- [mediaPlayingStarted](mediaplayingstarted%28%29.md): Tells the system that the Notification Content app extension began playing a media file.
