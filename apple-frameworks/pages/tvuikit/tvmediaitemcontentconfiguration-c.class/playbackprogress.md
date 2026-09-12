> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentconfiguration-c.class/playbackprogress](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentconfiguration-c.class/playbackprogress)

# playbackProgress

**Interface language:** Objective-C

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

The playback progress to display for the media item.

## Declaration

```objectivec
@property (nonatomic, assign) float playbackProgress;
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
- [badgeProperties](badgeproperties.md): Properties for configuring the badge.
- [TVMediaItemContentBadgeProperties](../tvmediaitemcontentbadgeproperties.md): Properties that affect the media item content badge.
- [overlayView](overlayview.md): An overlay view the system places above the image and automatically resizes to fill the frame.
