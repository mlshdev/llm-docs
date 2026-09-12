> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarappearance/selectionindicatorimage](https://developer.apple.com/documentation/uikit/uitabbarappearance/selectionindicatorimage)

# selectionIndicatorImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The image to draw for the selected item.

## Declaration

```swift
var selectionIndicatorImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

UIKit renders the image in this property above the tab bar, but behind the tab bar item. If you specify a template or symbol image, UIKit renders that image with the tint color from the [selectionIndicatorTintColor](selectionindicatortintcolor.md) property. If you specify any other type of image, UIKit displays your image without any additional tinting.

The default value of this property is `nil`, which causes UIKit to provide a default selection image.

## See Also

### Specifying the selection appearance

- [selectionIndicatorTintColor](selectionindicatortintcolor.md): The tint color to apply to the selection indicator image.

# selectionIndicatorImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The image to draw for the selected item.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIImage * selectionIndicatorImage;
```

<a id="Discussion"></a>

## Discussion

UIKit renders the image in this property above the tab bar, but behind the tab bar item. If you specify a template or symbol image, UIKit renders that image with the tint color from the [selectionIndicatorTintColor](selectionindicatortintcolor.md) property. If you specify any other type of image, UIKit displays your image without any additional tinting.

The default value of this property is `nil`, which causes UIKit to provide a default selection image.

## See Also

### Specifying the selection appearance

- [selectionIndicatorTintColor](selectionindicatortintcolor.md): The tint color to apply to the selection indicator image.
