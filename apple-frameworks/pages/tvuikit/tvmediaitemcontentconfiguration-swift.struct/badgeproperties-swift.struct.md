> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentconfiguration-swift.struct/badgeproperties-swift.struct](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentconfiguration-swift.struct/badgeproperties-swift.struct)

# TVMediaItemContentConfiguration.BadgeProperties

**Framework:** TVUIKit  
**Kind:** Structure  
**Availability:** tvOS 15.0+

Properties that affect the media item content badge.

## Declaration

```swift
struct BadgeProperties
```

## Topics

### Creating a Default Configuration

- [default()](badgeproperties-swift.struct/default%28%29.md): Creates the default configuration for a badge.
- [liveContent()](badgeproperties-swift.struct/livecontent%28%29.md): Creates the default configuration for a badge representing live content.

### Customizing Content

- [font](badgeproperties-swift.struct/font.md): The font for the badge text.
- [color](badgeproperties-swift.struct/color.md): The color of the badge text.
- [backgroundColor](badgeproperties-swift.struct/backgroundcolor.md): The background tint color of the badge.
- [transform](badgeproperties-swift.struct/transform.md): The transform to apply to the text before displaying it.
- [TVMediaItemContentConfiguration.TextProperties.TextTransform](textproperties-swift.struct/texttransform.md): Constants that specify the transform to apply to the text.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Customizing Content

- [image](image.md): The image to display.
- [text](text.md): The primary text.
- [secondaryText](secondarytext.md): The secondary text.
- [badgeText](badgetext.md): The text to display in a badge in the top corner of the content.
- [badgeProperties](badgeproperties-swift.property.md): Properties for configuring the badge.
- [overlayView](overlayview.md): An overlay view the system places above the image and automatically resizes to fill the frame.
- [playbackProgress](playbackprogress.md): The playback progress to display for the media item.
