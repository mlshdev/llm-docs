> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmonogramcontentconfiguration-c.class](https://developer.apple.com/documentation/tvuikit/tvmonogramcontentconfiguration-c.class)

# TVMonogramContentConfiguration

**Interface language:** Objective-C

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

A content configuration for a monogram view.

## Declaration

```objectivec
@interface TVMonogramContentConfiguration : NSObject
```

## Topics

### Creating Default Configurations

- [cellConfiguration](tvmonogramcontentconfiguration-c.class/cellconfiguration.md): Creates the default configuration for a circular monogram cell.

### Customizing Content

- [image](tvmonogramcontentconfiguration-c.class/image.md): The image to display.
- [text](tvmonogramcontentconfiguration-c.class/text.md): The primary text.
- [secondaryText](tvmonogramcontentconfiguration-c.class/secondarytext.md): The secondary text.
- [personNameComponents](tvmonogramcontentconfiguration-c.class/personnamecomponents.md): The name the system uses when creating a monogram image.

### Customizing Appearance

- [textProperties](tvmonogramcontentconfiguration-c.class/textproperties.md): Properties for configuring the primary text.
- [secondaryTextProperties](tvmonogramcontentconfiguration-c.class/secondarytextproperties.md): Properties for configuring the secondary text.
- [TVMonogramContentTextProperties](tvmonogramcontenttextproperties.md): Properties that affect the monogram content configuration’s text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UIContentConfiguration](../uikit/uicontentconfiguration-2raci.md)

## See Also

### Creating a Monogram Content View

- [initWithConfiguration:](tvmonogramcontentview/initwithconfiguration_.md): Creates a monogram content view with the configuration you specify.
