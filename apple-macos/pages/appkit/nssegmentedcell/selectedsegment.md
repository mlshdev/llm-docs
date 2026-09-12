> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/selectedsegment](https://developer.apple.com/documentation/appkit/nssegmentedcell/selectedsegment)

# selectedSegment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the selected segment of the control, or `-1` if no segment is selected.

## Declaration

```swift
var selectedSegment: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the zero-based index of the segment. If the control allows multiple selections, the value of this property is the index of the most recently selected segment.

If you specify an index that is out of bounds, an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) is raised.

## See Also

### Specifying the Selected Segment

- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey()](makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey()](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,

# selectedSegment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the selected segment of the control, or `-1` if no segment is selected.

## Declaration

```objectivec
@property NSInteger selectedSegment;
```

<a id="Discussion"></a>

## Discussion

This property contains the zero-based index of the segment. If the control allows multiple selections, the value of this property is the index of the most recently selected segment.

If you specify an index that is out of bounds, an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) is raised.

## See Also

### Specifying the Selected Segment

- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey](makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,
