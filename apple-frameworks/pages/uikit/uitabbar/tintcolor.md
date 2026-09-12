> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/tintcolor](https://developer.apple.com/documentation/uikit/uitabbar/tintcolor)

# tintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the tab bar items.

## Declaration

```swift
var tintColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property applies the specified color only to the tab bar’s items. Even if you do not specify a color, the tab bar may tint items using the tint color of one of its ancestor views. For information on how tinting colors are applied to views in a view hierarchy, see the description of the [tintColor](../uiview/tintcolor.md) property in [UIView](../uiview.md).

# tintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the tab bar items.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property applies the specified color only to the tab bar’s items. Even if you do not specify a color, the tab bar may tint items using the tint color of one of its ancestor views. For information on how tinting colors are applied to views in a view hierarchy, see the description of the [tintColor](../uiview/tintcolor.md) property in [UIView](../uiview.md).
