> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/segmenttype/selection](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/segmenttype/selection)

# NSTextLayoutManager.SegmentType.selection (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

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
