> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/makeprevioussegmentkey()](https://developer.apple.com/documentation/appkit/nssegmentedcell/makeprevioussegmentkey())

# makePreviousSegmentKey() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the previous segment.

## Declaration

```swift
func makePreviousSegmentKey()
```

<a id="Discussion"></a>

## Discussion

The previous segment is the one to the left of the currently selected segment. For the first segment, the selection wraps around to the last segment of the control.

## See Also

### Specifying the Selected Segment

- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey()](makenextsegmentkey%28%29.md): Selects the next segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,

# makePreviousSegmentKey (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the previous segment.

## Declaration

```objectivec
- (void) makePreviousSegmentKey;
```

<a id="Discussion"></a>

## Discussion

The previous segment is the one to the left of the currently selected segment. For the first segment, the selection wraps around to the last segment of the control.

## See Also

### Specifying the Selected Segment

- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey](makenextsegmentkey%28%29.md): Selects the next segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,
