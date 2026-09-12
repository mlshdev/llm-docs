> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/alignmentrect(forframe:)](https://developer.apple.com/documentation/appkit/nsview/alignmentrect(forframe:))

# alignmentRect(forFrame:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the view’s alignment rectangle for a given frame.

## Declaration

```swift
func alignmentRect(forFrame frame: NSRect) -> NSRect
```

## Parameters

- `frame`: The frame whose corresponding alignment rectangle is desired.

<a id="return-value"></a>

## Return Value

The alignment rectangle for the specified frame.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses alignment rectangles to align views, rather than their frame. This allows custom views to be aligned based on the location of their content while still having a frame that encompasses any ornamentation they need to draw around their content, such as shadows or reflections.

The default implementation returns the view’s frame modified by the insets specified by the view’s [alignmentRectInsets](alignmentrectinsets.md) method. Most custom views can override [alignmentRectInsets](alignmentrectinsets.md) to specify the location of their content within their frame. Custom views that require arbitrary transformations can override [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md) and [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md) to describe the location of their content. These two methods must always be inverses of each other.

## See Also

### Aligning Views with Auto Layout

- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets (in points) from the view’s frame that define its content rectangle.
- [baselineOffsetFromBottom](baselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.
- [firstBaselineOffsetFromTop](firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.

# alignmentRectForFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the view’s alignment rectangle for a given frame.

## Declaration

```objectivec
- (NSRect) alignmentRectForFrame:(NSRect) frame;
```

## Parameters

- `frame`: The frame whose corresponding alignment rectangle is desired.

<a id="return-value"></a>

## Return Value

The alignment rectangle for the specified frame.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses alignment rectangles to align views, rather than their frame. This allows custom views to be aligned based on the location of their content while still having a frame that encompasses any ornamentation they need to draw around their content, such as shadows or reflections.

The default implementation returns the view’s frame modified by the insets specified by the view’s [alignmentRectInsets](alignmentrectinsets.md) method. Most custom views can override [alignmentRectInsets](alignmentrectinsets.md) to specify the location of their content within their frame. Custom views that require arbitrary transformations can override [alignmentRectForFrame:](alignmentrect%28forframe_%29.md) and [frameForAlignmentRect:](frame%28foralignmentrect_%29.md) to describe the location of their content. These two methods must always be inverses of each other.

## See Also

### Aligning Views with Auto Layout

- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets (in points) from the view’s frame that define its content rectangle.
- [baselineOffsetFromBottom](baselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.
- [firstBaselineOffsetFromTop](firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.
