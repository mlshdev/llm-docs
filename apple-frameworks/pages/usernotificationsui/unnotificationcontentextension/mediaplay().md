> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextension/mediaplay()](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension/mediaplay())

# mediaPlay() (Swift)

**Framework:** User Notifications UI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

Tells you to begin playback of your media content.

## Declaration

```swift
optional func mediaPlay()
```

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

Don’t call this method yourself. If you implement the [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md) property in your view controller, the system calls this method when the user wants to begin playback of your media. Use your implementation of this method to initiate playback.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](mediaplaypausebuttontype.md): The type of media button type to display.
- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlayPauseButtonTintColor](mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPause()](mediapause%28%29.md): Tells you to pause playback of your media content.

# mediaPlay (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells you to begin playback of your media content.

## Declaration

```objectivec
- (void) mediaPlay;
```

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

Don’t call this method yourself. If you implement the [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md) property in your view controller, the system calls this method when the user wants to begin playback of your media. Use your implementation of this method to initiate playback.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](mediaplaypausebuttontype.md): The type of media button type to display.
- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlayPauseButtonTintColor](mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPause](mediapause%28%29.md): Tells you to pause playback of your media content.
