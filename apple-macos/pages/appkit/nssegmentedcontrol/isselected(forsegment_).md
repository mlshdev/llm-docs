> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/isselected(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/isselected(forsegment:))

# isSelected(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is selected.

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

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

# isSelectedForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is selected.

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

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.
