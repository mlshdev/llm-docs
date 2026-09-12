> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/backgroundimage](https://developer.apple.com/documentation/uikit/uitabbar/backgroundimage)

# backgroundImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom background image for the tab bar.

## Declaration

```swift
var backgroundImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If you specify a stretchable background image, the tab bar stretches your image to fill the available space. If your image is not stretchable and not large enough to fill the available space, the tab bar tiles the image. For information about how stretching works, see the [UIImage.ResizingMode](../uiimage/resizingmode-swift.enum.md) type in [UIImage](../uiimage.md).

When a custom background image is present, the tab bar does not draw any blur effects behind itself, even when the [isTranslucent](istranslucent.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the tab bar background.

# backgroundImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom background image for the tab bar.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * backgroundImage;
```

<a id="Discussion"></a>

## Discussion

If you specify a stretchable background image, the tab bar stretches your image to fill the available space. If your image is not stretchable and not large enough to fill the available space, the tab bar tiles the image. For information about how stretching works, see the [UIImageResizingMode](../uiimage/resizingmode-swift.enum.md) type in [UIImage](../uiimage.md).

When a custom background image is present, the tab bar does not draw any blur effects behind itself, even when the [translucent](istranslucent.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the tab bar background.
