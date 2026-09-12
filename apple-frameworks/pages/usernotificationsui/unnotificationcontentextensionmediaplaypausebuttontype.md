> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextensionmediaplaypausebuttontype](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextensionmediaplaypausebuttontype)

# UNNotificationContentExtensionMediaPlayPauseButtonType (Swift)

**Framework:** User Notifications UI  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

Constants indicating the type of media button to display.

## Declaration

```swift
enum UNNotificationContentExtensionMediaPlayPauseButtonType
```

## Topics

### Button Types

- [UNNotificationContentExtensionMediaPlayPauseButtonType.none](unnotificationcontentextensionmediaplaypausebuttontype/none.md): No media button.
- [UNNotificationContentExtensionMediaPlayPauseButtonType.default](unnotificationcontentextensionmediaplaypausebuttontype/default.md): A standard play/pause button.
- [UNNotificationContentExtensionMediaPlayPauseButtonType.overlay](unnotificationcontentextensionmediaplaypausebuttontype/overlay.md): A partially transparent play/pause button that is layered on top of your media content.

### Initializers

- [init(rawValue:)](unnotificationcontentextensionmediaplaypausebuttontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](unnotificationcontentextension/mediaplaypausebuttontype.md): The type of media button type to display.
- [mediaPlayPauseButtonFrame](unnotificationcontentextension/mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlayPauseButtonTintColor](unnotificationcontentextension/mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPlay()](unnotificationcontentextension/mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause()](unnotificationcontentextension/mediapause%28%29.md): Tells you to pause playback of your media content.

# UNNotificationContentExtensionMediaPlayPauseButtonType (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Constants indicating the type of media button to display.

## Declaration

```objectivec
enum UNNotificationContentExtensionMediaPlayPauseButtonType : NSUInteger;
```

## Topics

### Button Types

- [UNNotificationContentExtensionMediaPlayPauseButtonTypeNone](unnotificationcontentextensionmediaplaypausebuttontype/none.md): No media button.
- [UNNotificationContentExtensionMediaPlayPauseButtonTypeDefault](unnotificationcontentextensionmediaplaypausebuttontype/default.md): A standard play/pause button.
- [UNNotificationContentExtensionMediaPlayPauseButtonTypeOverlay](unnotificationcontentextensionmediaplaypausebuttontype/overlay.md): A partially transparent play/pause button that is layered on top of your media content.

## See Also

### Supporting Media Playback

- [mediaPlayPauseButtonType](unnotificationcontentextension/mediaplaypausebuttontype.md): The type of media button type to display.
- [mediaPlayPauseButtonFrame](unnotificationcontentextension/mediaplaypausebuttonframe.md): The frame rectangle to use for displaying a media playback button.
- [mediaPlayPauseButtonTintColor](unnotificationcontentextension/mediaplaypausebuttontintcolor.md): The tint color for the media playback button.
- [mediaPlay](unnotificationcontentextension/mediaplay%28%29.md): Tells you to begin playback of your media content.
- [mediaPause](unnotificationcontentextension/mediapause%28%29.md): Tells you to pause playback of your media content.
