> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/makenextsegmentkey()](https://developer.apple.com/documentation/appkit/nssegmentedcell/makenextsegmentkey())

# makeNextSegmentKey() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the next segment.

## Declaration

```swift
func makeNextSegmentKey()
```

<a id="Discussion"></a>

## Discussion

The next segment is the one to the right of the currently selected segment. For the last segment, the selection wraps back to the beginning of the control.

## See Also

### Specifying the Selected Segment

- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makePreviousSegmentKey()](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,

# makeNextSegmentKey (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the next segment.

## Declaration

```objectivec
- (void) makeNextSegmentKey;
```

<a id="Discussion"></a>

## Discussion

The next segment is the one to the right of the currently selected segment. For the last segment, the selection wraps back to the beginning of the control.

## See Also

### Specifying the Selected Segment

- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makePreviousSegmentKey](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,
