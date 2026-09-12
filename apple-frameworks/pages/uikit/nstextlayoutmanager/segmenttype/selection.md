> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/segmenttype/selection](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/segmenttype/selection)

# NSTextLayoutManager.SegmentType.selection (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The segment behavior suitable for selection rendering.

## Declaration

```swift
case selection
```

<a id="Discussion"></a>

## Discussion

This segment type extends the last segment in a line fragment to the trailing edge if continuing to the next line.

## See Also

### Kinds of text selection segments

- [NSTextLayoutManager.SegmentType.highlight](highlight.md): The segment behavior suitable for highlighting.
- [NSTextLayoutManager.SegmentType.standard](standard.md): The standard segment, matching the typographic bounds of the range.

# NSTextLayoutManagerSegmentTypeSelection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The segment behavior suitable for selection rendering.

## Declaration

```objectivec
NSTextLayoutManagerSegmentTypeSelection
```

<a id="Discussion"></a>

## Discussion

This segment type extends the last segment in a line fragment to the trailing edge if continuing to the next line.

## See Also

### Kinds of text selection segments

- [NSTextLayoutManagerSegmentTypeHighlight](highlight.md): The segment behavior suitable for highlighting.
- [NSTextLayoutManagerSegmentTypeStandard](standard.md): The standard segment, matching the typographic bounds of the range.
