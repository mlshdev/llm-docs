> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextension/mediaplaypausebuttontintcolor](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension/mediaplaypausebuttontintcolor)

# mediaPlayPauseButtonTintColor (Swift)

**Framework:** User Notifications UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

The tint color for the media playback button.

## Declaration

```swift
@NSCopying optional var mediaPlayPauseButtonTintColor: UIColor { get }
```

```swift
@NSCopying optional var mediaPlayPauseButtonTintColor: NSColor { get }
```

<a id="discussion"></a>

## Discussion

If you implement the [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md) property, you can also implement this property and use it to specify the tint color to apply to the button. If you don’t implement this property, the system uses a default color for the tint color.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](mediaplaypausebuttontype.md): The type of media button type to display.
- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlay()](mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause()](mediapause%28%29.md): Tells you to pause playback of your media content.

# mediaPlayPauseButtonTintColor (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The tint color for the media playback button.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UIColor * mediaPlayPauseButtonTintColor;
```

```objectivec
@property (nonatomic, copy, readonly) NSColor * mediaPlayPauseButtonTintColor;
```

<a id="discussion"></a>

## Discussion

If you implement the [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md) property, you can also implement this property and use it to specify the tint color to apply to the button. If you don’t implement this property, the system uses a default color for the tint color.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](mediaplaypausebuttontype.md): The type of media button type to display.
- [UNNotificationContentExtensionMediaPlayPauseButtonType](../unnotificationcontentextensionmediaplaypausebuttontype.md): Constants indicating the type of media button to display.
- [mediaPlayPauseButtonFrame](mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlay](mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause](mediapause%28%29.md): Tells you to pause playback of your media content.
