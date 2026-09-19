> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibuttonconfiguration/imagepadding

# imagePadding

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The distance between the button’s image and text.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CGFloat imagePadding;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the distance from the title and subtitle. This doesn’t affect the distance to the button’s edge.

## See Also

### Configuring images

- [image](image.md): The foreground image the button displays.
- [imagePlacement](imageplacement.md): The edge against which the button places the image.
- [imageColorTransformer](imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.
