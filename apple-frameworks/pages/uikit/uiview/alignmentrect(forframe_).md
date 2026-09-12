> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/alignmentrect(forframe:)](https://developer.apple.com/documentation/uikit/uiview/alignmentrect(forframe:))

# alignmentRect(forFrame:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view’s alignment rectangle for a given frame.

## Declaration

```swift
func alignmentRect(forFrame frame: CGRect) -> CGRect
```

## Parameters

- `frame`: The frame whose corresponding alignment rectangle is desired.

<a id="return-value"></a>

## Return Value

The alignment rectangle for the specified frame.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses alignment rectangles to align views, rather than their frame. This allows custom views to be aligned based on the location of their content while still having a frame that encompasses any ornamentation they need to draw around their content, such as shadows or reflections.

The default implementation returns the view’s frame modified by the view’s [alignmentRectInsets](alignmentrectinsets.md). Most custom views can use  [alignmentRectInsets](alignmentrectinsets.md) to specify the location of their content within their frame. Custom views that require arbitrary transformations can override [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md) and [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md) to describe the location of their content. These two methods must always be inverses of each other.

## See Also

### Aligning views in Auto Layout

- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets from the view’s frame that define its alignment rectangle.
- [forFirstBaselineLayout](forfirstbaselinelayout.md): Returns a view used to satisfy first baseline constraints.
- [forLastBaselineLayout](forlastbaselinelayout.md): Returns a view used to satisfy last baseline constraints.

# alignmentRectForFrame: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the view’s alignment rectangle for a given frame.

## Declaration

```objectivec
- (CGRect) alignmentRectForFrame:(CGRect) frame;
```

## Parameters

- `frame`: The frame whose corresponding alignment rectangle is desired.

<a id="return-value"></a>

## Return Value

The alignment rectangle for the specified frame.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses alignment rectangles to align views, rather than their frame. This allows custom views to be aligned based on the location of their content while still having a frame that encompasses any ornamentation they need to draw around their content, such as shadows or reflections.

The default implementation returns the view’s frame modified by the view’s [alignmentRectInsets](alignmentrectinsets.md). Most custom views can use  [alignmentRectInsets](alignmentrectinsets.md) to specify the location of their content within their frame. Custom views that require arbitrary transformations can override [alignmentRectForFrame:](alignmentrect%28forframe_%29.md) and [frameForAlignmentRect:](frame%28foralignmentrect_%29.md) to describe the location of their content. These two methods must always be inverses of each other.

## See Also

### Aligning views in Auto Layout

- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets from the view’s frame that define its alignment rectangle.
- [viewForFirstBaselineLayout](forfirstbaselinelayout.md): Returns a view used to satisfy first baseline constraints.
- [viewForLastBaselineLayout](forlastbaselinelayout.md): Returns a view used to satisfy last baseline constraints.
