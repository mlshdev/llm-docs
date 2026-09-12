> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/trackingmode](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/trackingmode)

# trackingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

The type of tracking behavior the control exhibits.

## Declaration

```swift
var trackingMode: NSSegmentedControl.SwitchTracking { get set }
```

<a id="Discussion"></a>

## Discussion

An [NSSegmentedControl.SwitchTracking](switchtracking.md) value specifies how the control responds when the user presses a keyboard key or clicks, force clicks (applies pressure in a pressure-sensitive system), releases pressure, and so on. For possible values see [NSSegmentedControl.SwitchTracking](switchtracking.md).

## See Also

### Related Documentation

- [Segmented Control Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SegmentedControl/SegmentedControl.html#//apple_ref/doc/uid/10000182i)
- [isContinuous](../nscontrol/iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

### Specifying the segment behavior

- [NSSegmentedControl.SwitchTracking](switchtracking.md): Constants that specify the type of tracking behavior a segmented control exhibits.
- [segmentStyle](segmentstyle.md): The visual style used to display the control.
- [NSSegmentedControl.Style](style.md): The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](segmentstyle.md).
- [role](role-swift.property.md)
- [NSSegmentedControl.Role](role-swift.enum.md)

# trackingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

The type of tracking behavior the control exhibits.

## Declaration

```objectivec
@property NSSegmentSwitchTracking trackingMode;
```

<a id="Discussion"></a>

## Discussion

An [NSSegmentSwitchTracking](switchtracking.md) value specifies how the control responds when the user presses a keyboard key or clicks, force clicks (applies pressure in a pressure-sensitive system), releases pressure, and so on. For possible values see [NSSegmentSwitchTracking](switchtracking.md).

## See Also

### Related Documentation

- [Segmented Control Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SegmentedControl/SegmentedControl.html#//apple_ref/doc/uid/10000182i)
- [continuous](../nscontrol/iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

### Specifying the segment behavior

- [NSSegmentSwitchTracking](switchtracking.md): Constants that specify the type of tracking behavior a segmented control exhibits.
- [segmentStyle](segmentstyle.md): The visual style used to display the control.
- [NSSegmentStyle](style.md): The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](segmentstyle.md).
- [role](role-swift.property.md)
- [NSSegmentedControlRole](role-swift.enum.md)
