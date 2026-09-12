> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentconfiguration-c.class](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentconfiguration-c.class)

# TVMediaItemContentConfiguration

**Interface language:** Objective-C

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

A content configuration for a media item view.

## Declaration

```objectivec
@interface TVMediaItemContentConfiguration : NSObject
```

## Topics

### Creating Default Configurations

- [wideCellConfiguration](tvmediaitemcontentconfiguration-c.class/widecellconfiguration.md): Creates the default configuration for a wide media item cell.

### Customizing Content

- [image](tvmediaitemcontentconfiguration-c.class/image.md): The image to display.
- [text](tvmediaitemcontentconfiguration-c.class/text.md): The primary text.
- [secondaryText](tvmediaitemcontentconfiguration-c.class/secondarytext.md): The secondary text.
- [badgeText](tvmediaitemcontentconfiguration-c.class/badgetext.md): The text to display in a badge in the top corner of the content.
- [badgeProperties](tvmediaitemcontentconfiguration-c.class/badgeproperties.md): Properties for configuring the badge.
- [TVMediaItemContentBadgeProperties](tvmediaitemcontentbadgeproperties.md): Properties that affect the media item content badge.
- [overlayView](tvmediaitemcontentconfiguration-c.class/overlayview.md): An overlay view the system places above the image and automatically resizes to fill the frame.
- [playbackProgress](tvmediaitemcontentconfiguration-c.class/playbackprogress.md): The playback progress to display for the media item.

### Customizing Appearance

- [TVMediaItemContentTextProperties](tvmediaitemcontenttextproperties.md): Properties that affect the media item content configuration’s text.
- [textProperties](tvmediaitemcontentconfiguration-c.class/textproperties.md): Properties for configuring the primary text.
- [secondaryTextProperties](tvmediaitemcontentconfiguration-c.class/secondarytextproperties.md): Properties for configuring the secondary text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UIContentConfiguration](../uikit/uicontentconfiguration-2raci.md)

## See Also

### Creating a Media Item Content View

- [initWithConfiguration:](tvmediaitemcontentview/initwithconfiguration_.md): Creates a media item content view with the configuration you specify.
