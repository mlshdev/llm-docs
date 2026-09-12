> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextension/mediaplaypausebuttontype](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension/mediaplaypausebuttontype)

# mediaPlayPauseButtonType (Swift)

**Framework:** User Notifications UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

The type of media button type to display.

## Declaration

```swift
optional var mediaPlayPauseButtonType: UNNotificationContentExtensionMediaPlayPauseButtonType { get }
```

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

Implement this property when you want the system to display a media playback button in your notification interface. Return an appropriate constant indicating the type of button you want. If you don’t implement this property, the system behaves as if you set the value to [UNNotificationContentExtensionMediaPlayPauseButtonType.none](../unnotificationcontentextensionmediaplaypausebuttontype/none.md).

## See Also

### Supporting Media Playback

- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlayPauseButtonTintColor](mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPlay()](mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause()](mediapause%28%29.md): Tells you to pause playback of your media content.

# mediaPlayPauseButtonType (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The type of media button type to display.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UNNotificationContentExtensionMediaPlayPauseButtonType mediaPlayPauseButtonType;
```

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

Implement this property when you want the system to display a media playback button in your notification interface. Return an appropriate constant indicating the type of button you want. If you don’t implement this property, the system behaves as if you set the value to [UNNotificationContentExtensionMediaPlayPauseButtonTypeNone](../unnotificationcontentextensionmediaplaypausebuttontype/none.md).

## See Also

### Supporting Media Playback

- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlayPauseButtonTintColor](mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPlay](mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause](mediapause%28%29.md): Tells you to pause playback of your media content.
