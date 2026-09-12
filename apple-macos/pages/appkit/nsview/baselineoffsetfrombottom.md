> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/baselineoffsetfrombottom](https://developer.apple.com/documentation/appkit/nsview/baselineoffsetfrombottom)

# baselineOffsetFromBottom (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.

## Declaration

```swift
var baselineOffsetFromBottom: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0`. For views that contain text or other content whose layout benefits from having a custom baseline, you can override this property and provide the correct distance between the bottom of the view’s alignment rectangle and that baseline.

## See Also

### Aligning Views with Auto Layout

- [alignmentRect(forFrame:)](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frame(forAlignmentRect:)](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets (in points) from the view’s frame that define its content rectangle.
- [firstBaselineOffsetFromTop](firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.

# baselineOffsetFromBottom (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.

## Declaration

```objectivec
@property (readonly) CGFloat baselineOffsetFromBottom;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0`. For views that contain text or other content whose layout benefits from having a custom baseline, you can override this property and provide the correct distance between the bottom of the view’s alignment rectangle and that baseline.

## See Also

### Aligning Views with Auto Layout

- [alignmentRectForFrame:](alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frameForAlignmentRect:](frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](alignmentrectinsets.md): The insets (in points) from the view’s frame that define its content rectangle.
- [firstBaselineOffsetFromTop](firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.
