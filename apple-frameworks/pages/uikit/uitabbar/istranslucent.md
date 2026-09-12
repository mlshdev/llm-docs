> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/istranslucent](https://developer.apple.com/documentation/uikit/uitabbar/istranslucent)

# isTranslucent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

A Boolean value that indicates whether the tab bar is translucent.

## Declaration

```swift
var isTranslucent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the tab bar is translucent, configure the [edgesForExtendedLayout](../uiviewcontroller/edgesforextendedlayout.md) and [extendedLayoutIncludesOpaqueBars](../uiviewcontroller/extendedlayoutincludesopaquebars.md) properties of your view controller to display your content underneath the tab bar.

If the tab bar doesn’t have a custom background image, or if any pixel of the background image has an alpha value of less than `1.0`, the default value of this property is [true](https://developer.apple.com/documentation/swift/true). If the background image is completely opaque, the default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set this property to [true](https://developer.apple.com/documentation/swift/true) and the custom background image is completely opaque, UIKit applies a system-defined opacity of less than `1.0` to the image. If you set this property to [false](https://developer.apple.com/documentation/swift/false) and the background image is not opaque, UIKit adds an opaque backdrop.

## See Also

### Customizing tab bar appearance

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height tab bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [leadingAccessoryView](leadingaccessoryview.md): The view at the leading edge of a tab bar on tvOS.
- [trailingAccessoryView](trailingaccessoryview.md): The view at the trailing edge of a tab bar on tvOS.
- [Legacy customizations](../uitabbar-legacy-customizations.md): Customize appearance information directly on the tab bar object.

# translucent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

A Boolean value that indicates whether the tab bar is translucent.

## Declaration

```objectivec
@property (nonatomic, getter=isTranslucent) BOOL translucent;
```

<a id="Discussion"></a>

## Discussion

When the tab bar is translucent, configure the [edgesForExtendedLayout](../uiviewcontroller/edgesforextendedlayout.md) and [extendedLayoutIncludesOpaqueBars](../uiviewcontroller/extendedlayoutincludesopaquebars.md) properties of your view controller to display your content underneath the tab bar.

If the tab bar doesn’t have a custom background image, or if any pixel of the background image has an alpha value of less than `1.0`, the default value of this property is [true](https://developer.apple.com/documentation/swift/true). If the background image is completely opaque, the default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set this property to [true](https://developer.apple.com/documentation/swift/true) and the custom background image is completely opaque, UIKit applies a system-defined opacity of less than `1.0` to the image. If you set this property to [false](https://developer.apple.com/documentation/swift/false) and the background image is not opaque, UIKit adds an opaque backdrop.

## See Also

### Customizing tab bar appearance

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height tab bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [leadingAccessoryView](leadingaccessoryview.md): The view at the leading edge of a tab bar on tvOS.
- [trailingAccessoryView](trailingaccessoryview.md): The view at the trailing edge of a tab bar on tvOS.
- [Legacy customizations](../uitabbar-legacy-customizations.md): Customize appearance information directly on the tab bar object.
