> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/forfirstbaselinelayout](https://developer.apple.com/documentation/uikit/uiview/forfirstbaselinelayout)

# forFirstBaselineLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a view used to satisfy first baseline constraints.

## Declaration

```swift
var forFirstBaselineLayout: UIView { get }
```

<a id="Discussion"></a>

## Discussion

For views with multiple rows of text, the first baseline is the baseline for the topmost row.

When you make a constraint to a view’s [NSLayoutConstraint.Attribute.firstBaseline](../nslayoutconstraint/attribute/firstbaseline.md) attribute, Auto Layout uses the baseline of the view returned by this method. If that view does not have a baseline, Auto Layout uses the view’s top edge.

Override this property to return a text-based subview (for example, [UILabel](../uilabel.md) or a nonscrolling [UITextView](../uitextview.md)). The returned view must be a subview of the receiver. The default implementation returns the value contained by [forLastBaselineLayout](forlastbaselinelayout.md).

> **Note**

>  If the same subview is appropriate for both the first and last baseline, you only need to override the [forLastBaselineLayout](forlastbaselinelayout.md) getter method.

## See Also

### Aligning views in Auto Layout

- [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets from the view’s frame that define its alignment rectangle.
- [forLastBaselineLayout](forlastbaselinelayout.md): Returns a view used to satisfy last baseline constraints.

# viewForFirstBaselineLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a view used to satisfy first baseline constraints.

## Declaration

```objectivec
@property (strong, readonly) UIView * viewForFirstBaselineLayout;
```

<a id="Discussion"></a>

## Discussion

For views with multiple rows of text, the first baseline is the baseline for the topmost row.

When you make a constraint to a view’s [NSLayoutAttributeFirstBaseline](../nslayoutconstraint/attribute/firstbaseline.md) attribute, Auto Layout uses the baseline of the view returned by this method. If that view does not have a baseline, Auto Layout uses the view’s top edge.

Override this property to return a text-based subview (for example, [UILabel](../uilabel.md) or a nonscrolling [UITextView](../uitextview.md)). The returned view must be a subview of the receiver. The default implementation returns the value contained by [viewForLastBaselineLayout](forlastbaselinelayout.md).

> **Note**

>  If the same subview is appropriate for both the first and last baseline, you only need to override the [viewForLastBaselineLayout](forlastbaselinelayout.md) getter method.

## See Also

### Aligning views in Auto Layout

- [alignmentRectForFrame:](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets from the view’s frame that define its alignment rectangle.
- [viewForLastBaselineLayout](forlastbaselinelayout.md): Returns a view used to satisfy last baseline constraints.
