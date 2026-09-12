> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentconfiguration-swift.struct](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentconfiguration-swift.struct)

# TVMediaItemContentConfiguration

**Framework:** TVUIKit  
**Kind:** Structure  
**Availability:** tvOS 15.0+

A content configuration for a media item view.

## Declaration

```swift
struct TVMediaItemContentConfiguration
```

## Topics

### Creating Default Configurations

- [wideCell()](tvmediaitemcontentconfiguration-swift.struct/widecell%28%29.md): Creates the default configuration for a wide media item cell.

### Customizing Content

- [image](tvmediaitemcontentconfiguration-swift.struct/image.md): The image to display.
- [text](tvmediaitemcontentconfiguration-swift.struct/text.md): The primary text.
- [secondaryText](tvmediaitemcontentconfiguration-swift.struct/secondarytext.md): The secondary text.
- [badgeText](tvmediaitemcontentconfiguration-swift.struct/badgetext.md): The text to display in a badge in the top corner of the content.
- [badgeProperties](tvmediaitemcontentconfiguration-swift.struct/badgeproperties-swift.property.md): Properties for configuring the badge.
- [TVMediaItemContentConfiguration.BadgeProperties](tvmediaitemcontentconfiguration-swift.struct/badgeproperties-swift.struct.md): Properties that affect the media item content badge.
- [overlayView](tvmediaitemcontentconfiguration-swift.struct/overlayview.md): An overlay view the system places above the image and automatically resizes to fill the frame.
- [playbackProgress](tvmediaitemcontentconfiguration-swift.struct/playbackprogress.md): The playback progress to display for the media item.

### Customizing Appearance

- [TVMediaItemContentConfiguration.TextProperties](tvmediaitemcontentconfiguration-swift.struct/textproperties-swift.struct.md): Properties that affect the media item content configuration’s text.
- [textProperties](tvmediaitemcontentconfiguration-swift.struct/textproperties-swift.property.md): Properties for configuring the primary text.
- [secondaryTextProperties](tvmediaitemcontentconfiguration-swift.struct/secondarytextproperties.md): Properties for configuring the secondary text.

### Creating a Content View

- [makeContentView()](tvmediaitemcontentconfiguration-swift.struct/makecontentview%28%29.md): Creates a new instance of the content view using this configuration.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [UIContentConfiguration](../uikit/uicontentconfiguration-9eib5.md)

## See Also

### Creating a Media Item Content View

- [init(configuration:)](tvmediaitemcontentview/init%28configuration_%29.md): Creates a media item content view with the configuration you specify.
