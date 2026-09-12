> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/switchtracking](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/switchtracking)

# NSSegmentedControl.SwitchTracking (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the type of tracking behavior a segmented control exhibits.

## Declaration

```swift
enum SwitchTracking
```

## Topics

### Constants

- [NSSegmentedControl.SwitchTracking.selectOne](switchtracking/selectone.md): Only one segment in the control can be selected at a time.
- [NSSegmentedControl.SwitchTracking.selectAny](switchtracking/selectany.md): One or more segment cells in the control can be selected at a time.
- [NSSegmentedControl.SwitchTracking.momentary](switchtracking/momentary.md): A tracking mode that selects a segment when a person clicks within the bounds of the segment.
- [NSSegmentedControl.SwitchTracking.momentaryAccelerator](switchtracking/momentaryaccelerator.md): A tracking mode that sends repeating actions as pressure changes on Force Touch systems, stopping when someone releases the segment.

### Initializers

- [init(rawValue:)](switchtracking/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the segment behavior

- [trackingMode](trackingmode.md): The type of tracking behavior the control exhibits.
- [segmentStyle](segmentstyle.md): The visual style used to display the control.
- [NSSegmentedControl.Style](style.md): The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](segmentstyle.md).
- [role](role-swift.property.md)
- [NSSegmentedControl.Role](role-swift.enum.md)

# NSSegmentSwitchTracking (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the type of tracking behavior a segmented control exhibits.

## Declaration

```objectivec
enum NSSegmentSwitchTracking : NSUInteger;
```

## Topics

### Constants

- [NSSegmentSwitchTrackingSelectOne](switchtracking/selectone.md): Only one segment in the control can be selected at a time.
- [NSSegmentSwitchTrackingSelectAny](switchtracking/selectany.md): One or more segment cells in the control can be selected at a time.
- [NSSegmentSwitchTrackingMomentary](switchtracking/momentary.md): A tracking mode that selects a segment when a person clicks within the bounds of the segment.
- [NSSegmentSwitchTrackingMomentaryAccelerator](switchtracking/momentaryaccelerator.md): A tracking mode that sends repeating actions as pressure changes on Force Touch systems, stopping when someone releases the segment.

## See Also

### Specifying the segment behavior

- [trackingMode](trackingmode.md): The type of tracking behavior the control exhibits.
- [segmentStyle](segmentstyle.md): The visual style used to display the control.
- [NSSegmentStyle](style.md): The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](segmentstyle.md).
- [role](role-swift.property.md)
- [NSSegmentedControlRole](role-swift.enum.md)
