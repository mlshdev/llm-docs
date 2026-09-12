> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentconfiguration-swift.struct/playbackprogress](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentconfiguration-swift.struct/playbackprogress)

# playbackProgress

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

The playback progress to display for the media item.

## Declaration

```swift
var playbackProgress: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The system clamps the value between `0.0` and `1.0`.

## See Also

### Customizing Content

- [image](image.md): The image to display.
- [text](text.md): The primary text.
- [secondaryText](secondarytext.md): The secondary text.
- [badgeText](badgetext.md): The text to display in a badge in the top corner of the content.
- [badgeProperties](badgeproperties-swift.property.md): Properties for configuring the badge.
- [TVMediaItemContentConfiguration.BadgeProperties](badgeproperties-swift.struct.md): Properties that affect the media item content badge.
- [overlayView](overlayview.md): An overlay view the system places above the image and automatically resizes to fill the frame.
