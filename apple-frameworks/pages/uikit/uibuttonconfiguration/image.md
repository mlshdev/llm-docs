> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/image](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/image)

# image

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The foreground image the button displays.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

A configuration contains one image. To change the image based on button state, use [configurationUpdateHandler](../uibutton/configurationupdatehandler-swift.property.md) or [updateConfiguration](../uibutton/updateconfiguration%28%29.md).

## See Also

### Configuring images

- [imagePadding](imagepadding.md): The distance between the button’s image and text.
- [imagePlacement](imageplacement.md): The edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.
