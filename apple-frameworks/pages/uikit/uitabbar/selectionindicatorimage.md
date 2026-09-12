> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/selectionindicatorimage](https://developer.apple.com/documentation/uikit/uitabbar/selectionindicatorimage)

# selectionIndicatorImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image to use for the selection indicator.

## Declaration

```swift
var selectionIndicatorImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify a custom selection image. Your image is rendered on top of the tab bar but behind the contents of the tab bar item itself. The default value of this property is `nil`, which causes the tab bar to apply a default highlight to the selected item.

## See Also

### Configuring selection appearance

- [unselectedItemTintColor](unselecteditemtintcolor.md): The tint color to apply to unselected tabs.
- [selectedImageTintColor](selectedimagetintcolor.md): Deprecated. The tint color applied to the selected tab bar item.

# selectionIndicatorImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image to use for the selection indicator.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * selectionIndicatorImage;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify a custom selection image. Your image is rendered on top of the tab bar but behind the contents of the tab bar item itself. The default value of this property is `nil`, which causes the tab bar to apply a default highlight to the selected item.

## See Also

### Configuring selection appearance

- [unselectedItemTintColor](unselecteditemtintcolor.md): The tint color to apply to unselected tabs.
- [selectedImageTintColor](selectedimagetintcolor.md): Deprecated. The tint color applied to the selected tab bar item.
