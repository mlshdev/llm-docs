> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/selectedsegment](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/selectedsegment)

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

If the control allows multiple selections, this property contains the most recently selected segment. If the index is out of bounds, an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) is raised.

## See Also

### Managing the selected segment

- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegment(withTag:)](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

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

If the control allows multiple selections, this property contains the most recently selected segment. If the index is out of bounds, an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) is raised.

## See Also

### Managing the selected segment

- [indexOfSelectedItem](indexofselecteditem.md)
- [selectSegmentWithTag:](selectsegment%28withtag_%29.md): Selects the segment with the specified tag.
- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.
