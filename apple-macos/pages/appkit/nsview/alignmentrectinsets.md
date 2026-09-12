> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/alignmentrectinsets](https://developer.apple.com/documentation/appkit/nsview/alignmentrectinsets)

# alignmentRectInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The insets (in points) from the view’s frame that define its content rectangle.

## Declaration

```swift
var alignmentRectInsets: NSEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

The default value is an [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets) structure with the value `0` for each component. Custom views that draw ornamentation around their content can override this property and return insets that align with the edges of the content, excluding the ornamentation. This allows the constraint-based layout system to align views based on their content, rather than just their frame.

Custom views whose content location can’t be expressed by a simple set of insets should override [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md) and [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md) to describe their custom transform between alignment rectangle and frame.

## See Also

### Aligning Views with Auto Layout

- [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [baselineOffsetFromBottom](baselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.
- [firstBaselineOffsetFromTop](firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.

# alignmentRectInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The insets (in points) from the view’s frame that define its content rectangle.

## Declaration

```objectivec
@property (readonly) NSEdgeInsets alignmentRectInsets;
```

<a id="Discussion"></a>

## Discussion

The default value is an [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets) structure with the value `0` for each component. Custom views that draw ornamentation around their content can override this property and return insets that align with the edges of the content, excluding the ornamentation. This allows the constraint-based layout system to align views based on their content, rather than just their frame.

Custom views whose content location can’t be expressed by a simple set of insets should override [alignmentRectForFrame:](alignmentrect%28forframe_%29.md) and [frameForAlignmentRect:](frame%28foralignmentrect_%29.md) to describe their custom transform between alignment rectangle and frame.

## See Also

### Aligning Views with Auto Layout

- [alignmentRectForFrame:](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [baselineOffsetFromBottom](baselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.
- [firstBaselineOffsetFromTop](firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.
