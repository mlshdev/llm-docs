> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentbadgeproperties](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentbadgeproperties)

# TVMediaItemContentBadgeProperties

**Interface language:** Objective-C

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

Properties that affect the media item content badge.

## Declaration

```objectivec
@interface TVMediaItemContentBadgeProperties : NSObject
```

## Topics

### Creating a Default Configurations

- [defaultBadgeProperties](tvmediaitemcontentbadgeproperties/defaultbadgeproperties.md): Creates the default configuration for a badge.
- [liveContentBadgeProperties](tvmediaitemcontentbadgeproperties/livecontentbadgeproperties.md): Creates the default configuration for a badge representing live content.

### Customizing Content

- [font](tvmediaitemcontentbadgeproperties/font.md): The font for the badge text.
- [color](tvmediaitemcontentbadgeproperties/color.md): The color of the badge text.
- [backgroundColor](tvmediaitemcontentbadgeproperties/backgroundcolor.md): The background tint color of the badge.
- [transform](tvmediaitemcontentbadgeproperties/transform.md): The transform to apply to the text before displaying it.
- [TVMediaItemContentTextTransform](tvmediaitemcontenttexttransform.md): Constants that specify the transform to apply to the text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Customizing Content

- [image](tvmediaitemcontentconfiguration-c.class/image.md): The image to display.
- [text](tvmediaitemcontentconfiguration-c.class/text.md): The primary text.
- [secondaryText](tvmediaitemcontentconfiguration-c.class/secondarytext.md): The secondary text.
- [badgeText](tvmediaitemcontentconfiguration-c.class/badgetext.md): The text to display in a badge in the top corner of the content.
- [badgeProperties](tvmediaitemcontentconfiguration-c.class/badgeproperties.md): Properties for configuring the badge.
- [overlayView](tvmediaitemcontentconfiguration-c.class/overlayview.md): An overlay view the system places above the image and automatically resizes to fill the frame.
- [playbackProgress](tvmediaitemcontentconfiguration-c.class/playbackprogress.md): The playback progress to display for the media item.
