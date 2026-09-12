> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/forlastbaselinelayout](https://developer.apple.com/documentation/uikit/uiview/forlastbaselinelayout)

# forLastBaselineLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a view used to satisfy last baseline constraints.

## Declaration

```swift
var forLastBaselineLayout: UIView { get }
```

<a id="Discussion"></a>

## Discussion

For views with multiple rows of text, the last baseline is the baseline for the bottommost row.

When you make a constraint to a view’s [NSLayoutConstraint.Attribute.lastBaseline](../nslayoutconstraint/attribute/lastbaseline.md) attribute, Auto Layout uses the baseline of the view returned by this method. If that view does not have a baseline, Auto Layout uses the view’s bottom edge.

Override this property to return a text-based subview (for example, [UILabel](../uilabel.md) or a nonscrolling [UITextView](../uitextview.md)). The returned view must be a subview of the receiver. The default implementation returns the receiving view.

## See Also

### Aligning views in Auto Layout

- [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets from the view’s frame that define its alignment rectangle.
- [forFirstBaselineLayout](forfirstbaselinelayout.md): Returns a view used to satisfy first baseline constraints.

# viewForLastBaselineLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a view used to satisfy last baseline constraints.

## Declaration

```objectivec
@property (strong, readonly) UIView * viewForLastBaselineLayout;
```

<a id="Discussion"></a>

## Discussion

For views with multiple rows of text, the last baseline is the baseline for the bottommost row.

When you make a constraint to a view’s [NSLayoutAttributeLastBaseline](../nslayoutconstraint/attribute/lastbaseline.md) attribute, Auto Layout uses the baseline of the view returned by this method. If that view does not have a baseline, Auto Layout uses the view’s bottom edge.

Override this property to return a text-based subview (for example, [UILabel](../uilabel.md) or a nonscrolling [UITextView](../uitextview.md)). The returned view must be a subview of the receiver. The default implementation returns the receiving view.

## See Also

### Aligning views in Auto Layout

- [alignmentRectForFrame:](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets from the view’s frame that define its alignment rectangle.
- [viewForFirstBaselineLayout](forfirstbaselinelayout.md): Returns a view used to satisfy first baseline constraints.
