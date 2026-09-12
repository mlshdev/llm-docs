> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/selectedimage](https://developer.apple.com/documentation/uikit/uitabbaritem/selectedimage)

# selectedImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The source image the item uses to generate its selected image.

## Declaration

```swift
var selectedImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the item uses the value in [image](../uibaritem/image.md) instead. The item creates the images it displays from the alpha values in its source images. To prevent system tinting, use images with the [UIImage.RenderingMode.alwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode. The item clips any image that’s larger than its bounds.

## See Also

### Configuring the item’s appearance

- [standardAppearance](standardappearance.md): The appearance settings for a tab bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [titlePositionAdjustment](titlepositionadjustment.md): The offset to apply to the title’s position.

# selectedImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The source image the item uses to generate its selected image.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * selectedImage;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the item uses the value in [image](../uibaritem/image.md) instead. The item creates the images it displays from the alpha values in its source images. To prevent system tinting, use images with the [UIImageRenderingModeAlwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode. The item clips any image that’s larger than its bounds.

## See Also

### Configuring the item’s appearance

- [standardAppearance](standardappearance.md): The appearance settings for a tab bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [titlePositionAdjustment](titlepositionadjustment.md): The offset to apply to the title’s position.
