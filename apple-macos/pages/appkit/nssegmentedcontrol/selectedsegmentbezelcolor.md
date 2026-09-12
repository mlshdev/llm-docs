> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/selectedsegmentbezelcolor](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/selectedsegmentbezelcolor)

# selectedSegmentBezelColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color of the selected segment’s bezel, in appearances that support it.

## Declaration

```swift
@NSCopying var selectedSegmentBezelColor: NSColor? { get set }
```

## See Also

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

# selectedSegmentBezelColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color of the selected segment’s bezel, in appearances that support it.

## Declaration

```objectivec
@property (copy, nullable) NSColor * selectedSegmentBezelColor;
```

## See Also

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.
