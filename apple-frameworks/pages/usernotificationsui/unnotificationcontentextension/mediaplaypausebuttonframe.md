> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextension/mediaplaypausebuttonframe](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension/mediaplaypausebuttonframe)

# mediaPlayPauseButtonFrame (Swift)

**Framework:** User Notifications UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

The frame rectangle to use for displaying a media playback button.

## Declaration

```swift
optional var mediaPlayPauseButtonFrame: CGRect { get }
```

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

If you support the playback of media directly from your notification interface, implement this property and use it to return a nonempty rectangle specified in the coordinate system of your view controller’s view. The system draws a button in the provided rectangle that lets the user play and pause your media content. The system handles the drawing of the button for you and calls the [mediaPlay()](mediaplay%28%29.md) and [mediaPause()](mediapause%28%29.md) methods in response to user interactions. You can place this button anywhere in your view controller’s view.

If you don’t implement this property, the system doesn’t draw a media playback button.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](mediaplaypausebuttontype.md): The type of media button type to display.
- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonTintColor](mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPlay()](mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause()](mediapause%28%29.md): Tells you to pause playback of your media content.

# mediaPlayPauseButtonFrame (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The frame rectangle to use for displaying a media playback button.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGRect mediaPlayPauseButtonFrame;
```

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

If you support the playback of media directly from your notification interface, implement this property and use it to return a nonempty rectangle specified in the coordinate system of your view controller’s view. The system draws a button in the provided rectangle that lets the user play and pause your media content. The system handles the drawing of the button for you and calls the [mediaPlay](mediaplay%28%29.md) and [mediaPause](mediapause%28%29.md) methods in response to user interactions. You can place this button anywhere in your view controller’s view.

If you don’t implement this property, the system doesn’t draw a media playback button.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](mediaplaypausebuttontype.md): The type of media button type to display.
- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonTintColor](mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPlay](mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause](mediapause%28%29.md): Tells you to pause playback of your media content.
