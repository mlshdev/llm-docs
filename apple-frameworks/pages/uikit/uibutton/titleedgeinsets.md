> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/titleedgeinsets](https://developer.apple.com/documentation/uikit/uibutton/titleedgeinsets)

# titleEdgeInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The inset or outset margins for the rectangle around the button’s title text.

> The system ignores this when you use [UIButton.Configuration](configuration-swift.struct.md).

## Declaration

```swift
var titleEdgeInsets: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to resize and reposition the effective drawing rectangle for the button title. You can specify a different value for each of the four insets (top, left, bottom, right). A positive value shrinks, or insets, that edge—moving it closer to the center of the button. A negative value expands, or outsets, that edge. Use the [init(top:left:bottom:right:)](../uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md) function to construct a value for this property. The default value is [zero](../uiedgeinsets/zero.md).

The insets you specify are applied to the title rectangle after that rectangle has been sized to fit the button’s text. Thus, positive inset values may actually clip the title text.

This property is used only for positioning the title during layout. The button does not use this property to determine [intrinsicContentSize](../uiview/intrinsiccontentsize.md) and [sizeThatFits(\_:)](../uiview/sizethatfits%28__%29.md).

## See Also

### Edge insets

- [contentEdgeInsets](contentedgeinsets.md): Deprecated. The inset or outset margins for the rectangle surrounding all of the button’s content.
- [imageEdgeInsets](imageedgeinsets.md): Deprecated. The inset or outset margins for the rectangle around the button’s image.

# titleEdgeInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The inset or outset margins for the rectangle around the button’s title text.

> The system ignores this when you use [UIButton.Configuration](configuration-swift.struct.md).

## Declaration

```objectivec
@property (nonatomic) UIEdgeInsets titleEdgeInsets;
```

<a id="Discussion"></a>

## Discussion

Use this property to resize and reposition the effective drawing rectangle for the button title. You can specify a different value for each of the four insets (top, left, bottom, right). A positive value shrinks, or insets, that edge—moving it closer to the center of the button. A negative value expands, or outsets, that edge. Use the [UIEdgeInsetsMake](../uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md) function to construct a value for this property. The default value is [UIEdgeInsetsZero](../uiedgeinsets/zero.md).

The insets you specify are applied to the title rectangle after that rectangle has been sized to fit the button’s text. Thus, positive inset values may actually clip the title text.

This property is used only for positioning the title during layout. The button does not use this property to determine [intrinsicContentSize](../uiview/intrinsiccontentsize.md) and [sizeThatFits:](../uiview/sizethatfits%28__%29.md).

## See Also

### Edge insets

- [contentEdgeInsets](contentedgeinsets.md): Deprecated. The inset or outset margins for the rectangle surrounding all of the button’s content.
- [imageEdgeInsets](imageedgeinsets.md): Deprecated. The inset or outset margins for the rectangle around the button’s image.
