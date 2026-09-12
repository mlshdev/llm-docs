> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/isselected(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcell/isselected(forsegment:))

# isSelected(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is selected,

## Declaration

```swift
func isSelected(forSegment segment: Int) -> Bool
```

## Parameters

- `segment`: The index of the segment whose selection state you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment is selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the Selected Segment

- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey()](makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey()](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.

# isSelectedForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is selected,

## Declaration

```objectivec
- (BOOL) isSelectedForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose selection state you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment is selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the Selected Segment

- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [makeNextSegmentKey](makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
