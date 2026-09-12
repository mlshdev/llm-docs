> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setselected(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setselected(_:forsegment:))

# setSelected(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the selection state of the specified segment.

## Declaration

```swift
func setSelected(_ selected: Bool, forSegment segment: Int)
```

## Parameters

- `selected`: [true](https://developer.apple.com/documentation/swift/true) if you want to select the segment; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `segment`: The index of the segment whose selection state you want to set. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="Discussion"></a>

## Discussion

If the control allows only a single selection, this method deselects any other selected segments.

If the [trackingMode](trackingmode.md) property of the segment is set to [NSSegmentedControl.SwitchTracking.momentary](switchtracking/momentary.md), then attempting to set the selected state of the segment will have no effect.

## See Also

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

# setSelected:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the selection state of the specified segment.

## Declaration

```objectivec
- (void) setSelected:(BOOL) selected forSegment:(NSInteger) segment;
```

## Parameters

- `selected`: [true](https://developer.apple.com/documentation/swift/true) if you want to select the segment; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `segment`: The index of the segment whose selection state you want to set. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="Discussion"></a>

## Discussion

If the control allows only a single selection, this method deselects any other selected segments.

If the [trackingMode](trackingmode.md) property of the segment is set to [NSSegmentSwitchTrackingMomentary](switchtracking/momentary.md), then attempting to set the selected state of the segment will have no effect.

## See Also

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.
