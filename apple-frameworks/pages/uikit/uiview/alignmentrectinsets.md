> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/alignmentrectinsets](https://developer.apple.com/documentation/uikit/uiview/alignmentrectinsets)

# alignmentRectInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The insets from the view’s frame that define its alignment rectangle.

## Declaration

```swift
var alignmentRectInsets: UIEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an [UIEdgeInsets](../uiedgeinsets.md) structure with zero values. Custom views that draw ornamentation around their content should use this property to return insets that align with the edges of the content, excluding the ornamentation. This allows the constraint-based layout system to align views based on their content, rather than just their frame.

Custom views whose content location can’t be expressed by a simple set of insets should override [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md) and [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md) to describe their custom transform between alignment rectangle and frame.

## See Also

### Aligning views in Auto Layout

- [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [forFirstBaselineLayout](forfirstbaselinelayout.md): Returns a view used to satisfy first baseline constraints.
- [forLastBaselineLayout](forlastbaselinelayout.md): Returns a view used to satisfy last baseline constraints.

# alignmentRectInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The insets from the view’s frame that define its alignment rectangle.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEdgeInsets alignmentRectInsets;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an [UIEdgeInsets](../uiedgeinsets.md) structure with zero values. Custom views that draw ornamentation around their content should use this property to return insets that align with the edges of the content, excluding the ornamentation. This allows the constraint-based layout system to align views based on their content, rather than just their frame.

Custom views whose content location can’t be expressed by a simple set of insets should override [alignmentRectForFrame:](alignmentrect%28forframe_%29.md) and [frameForAlignmentRect:](frame%28foralignmentrect_%29.md) to describe their custom transform between alignment rectangle and frame.

## See Also

### Aligning views in Auto Layout

- [alignmentRectForFrame:](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [viewForFirstBaselineLayout](forfirstbaselinelayout.md): Returns a view used to satisfy first baseline constraints.
- [viewForLastBaselineLayout](forlastbaselinelayout.md): Returns a view used to satisfy last baseline constraints.
