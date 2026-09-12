> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/doublevalueforselectedsegment](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/doublevalueforselectedsegment)

# doubleValueForSelectedSegment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

## Declaration

```swift
var doubleValueForSelectedSegment: Double { get }
```

<a id="return-value"></a>

## Return Value

The value of the selected segment interpreted as a double-precision floating-point number.

<a id="Discussion"></a>

## Discussion

This method is intended for use with controls whose tracking mode is set to [NSSegmentedControl.SwitchTracking.momentaryAccelerator](switchtracking/momentaryaccelerator.md). An assertion will occur if this method is called for other types of segmented controls.

## See Also

### Related Documentation

- [NSSegmentedControl.SwitchTracking.momentaryAccelerator](switchtracking/momentaryaccelerator.md): A tracking mode that sends repeating actions as pressure changes on Force Touch systems, stopping when someone releases the segment.
- [trackingMode](trackingmode.md): The type of tracking behavior the control exhibits.

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.

# doubleValueForSelectedSegment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

## Declaration

```objectivec
@property (readonly) double doubleValueForSelectedSegment;
```

<a id="return-value"></a>

## Return Value

The value of the selected segment interpreted as a double-precision floating-point number.

<a id="Discussion"></a>

## Discussion

This method is intended for use with controls whose tracking mode is set to [NSSegmentSwitchTrackingMomentaryAccelerator](switchtracking/momentaryaccelerator.md). An assertion will occur if this method is called for other types of segmented controls.

## See Also

### Related Documentation

- [NSSegmentSwitchTrackingMomentaryAccelerator](switchtracking/momentaryaccelerator.md): A tracking mode that sends repeating actions as pressure changes on Force Touch systems, stopping when someone releases the segment.
- [trackingMode](trackingmode.md): The type of tracking behavior the control exhibits.

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
