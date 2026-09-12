> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarappearance/selectionindicatortintcolor](https://developer.apple.com/documentation/uikit/uitabbarappearance/selectionindicatortintcolor)

# selectionIndicatorTintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The tint color to apply to the selection indicator image.

## Declaration

```swift
@NSCopying var selectionIndicatorTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

UIKit combines the color in this property with the image in the [selectionIndicatorImage](selectionindicatorimage.md) to create the final appearance for the selected item. If you supplied a template image in [selectionIndicatorImage](selectionindicatorimage.md), UIKit uses this color to tint that image. If [selectionIndicatorImage](selectionindicatorimage.md) is `nil`, UIKit provides a default selection indicator image that accepts your tint color. If this property is `nil` or contains a clear color, UIKit doesn’t display a selection indicator.

If the image you supplied in [selectionIndicatorImage](selectionindicatorimage.md) isn’t a template image, UIKit ignores the value in this property and displays your image as is.

The default value of this property is `nil`.

## See Also

### Specifying the selection appearance

- [selectionIndicatorImage](selectionindicatorimage.md): The image to draw for the selected item.

# selectionIndicatorTintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The tint color to apply to the selection indicator image.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIColor * selectionIndicatorTintColor;
```

<a id="Discussion"></a>

## Discussion

UIKit combines the color in this property with the image in the [selectionIndicatorImage](selectionindicatorimage.md) to create the final appearance for the selected item. If you supplied a template image in [selectionIndicatorImage](selectionindicatorimage.md), UIKit uses this color to tint that image. If [selectionIndicatorImage](selectionindicatorimage.md) is `nil`, UIKit provides a default selection indicator image that accepts your tint color. If this property is `nil` or contains a clear color, UIKit doesn’t display a selection indicator.

If the image you supplied in [selectionIndicatorImage](selectionindicatorimage.md) isn’t a template image, UIKit ignores the value in this property and displays your image as is.

The default value of this property is `nil`.

## See Also

### Specifying the selection appearance

- [selectionIndicatorImage](selectionindicatorimage.md): The image to draw for the selected item.
