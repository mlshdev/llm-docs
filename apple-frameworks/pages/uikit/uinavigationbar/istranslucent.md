> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/istranslucent](https://developer.apple.com/documentation/uikit/uinavigationbar/istranslucent)

# isTranslucent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the navigation bar is translucent.

## Declaration

```swift
var isTranslucent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the navigation bar is translucent, configure the [edgesForExtendedLayout](../uiviewcontroller/edgesforextendedlayout.md) and [extendedLayoutIncludesOpaqueBars](../uiviewcontroller/extendedlayoutincludesopaquebars.md) properties of your view controller to display your content underneath the navigation bar.

If the navigation bar doesn’t have a custom background image, or if any pixel of the background image has an alpha value of less than `1.0`, the default value of this property is [true](https://developer.apple.com/documentation/swift/true). If the background image is completely opaque, the default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set this property to [true](https://developer.apple.com/documentation/swift/true) and the custom background image is completely opaque, UIKit applies a system-defined opacity of less than `1.0` to the image. If you set this property to [false](https://developer.apple.com/documentation/swift/false) and the background image is not opaque, UIKit adds an opaque backdrop.

## See Also

### Customizing the bar’s appearance

- [prefersLargeTitles](preferslargetitles.md): A Boolean value that indicates whether the title displays in a large format.
- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.

# translucent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the navigation bar is translucent.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isTranslucent) BOOL translucent;
```

<a id="Discussion"></a>

## Discussion

When the navigation bar is translucent, configure the [edgesForExtendedLayout](../uiviewcontroller/edgesforextendedlayout.md) and [extendedLayoutIncludesOpaqueBars](../uiviewcontroller/extendedlayoutincludesopaquebars.md) properties of your view controller to display your content underneath the navigation bar.

If the navigation bar doesn’t have a custom background image, or if any pixel of the background image has an alpha value of less than `1.0`, the default value of this property is [true](https://developer.apple.com/documentation/swift/true). If the background image is completely opaque, the default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set this property to [true](https://developer.apple.com/documentation/swift/true) and the custom background image is completely opaque, UIKit applies a system-defined opacity of less than `1.0` to the image. If you set this property to [false](https://developer.apple.com/documentation/swift/false) and the background image is not opaque, UIKit adds an opaque backdrop.

## See Also

### Customizing the bar’s appearance

- [prefersLargeTitles](preferslargetitles.md): A Boolean value that indicates whether the title displays in a large format.
- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.
