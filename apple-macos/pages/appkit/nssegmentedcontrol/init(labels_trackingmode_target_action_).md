> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/init(labels:trackingmode:target:action:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/init(labels:trackingmode:target:action:))

# init(labels:trackingMode:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a standard segmented control containing one segment for each of the provided labels.

## Declaration

```swift
convenience init(labels: [String], trackingMode: NSSegmentedControl.SwitchTracking, target: Any?, action: Selector?)
```

## Parameters

- `labels`: An array of localized label strings to use for the control’s segments.
- `trackingMode`: The selection mode for the control. The NSSegmentSwitchTracking enum describes the possible values and their effects.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized segmented control.

## See Also

### Creating a segmented control

- [init(images:trackingMode:target:action:)](init%28images_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided images.

# segmentedControlWithLabels:trackingMode:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a standard segmented control containing one segment for each of the provided labels.

## Declaration

```objectivec
+ (instancetype) segmentedControlWithLabels:(NSArray<NSString *> *) labels trackingMode:(NSSegmentSwitchTracking) trackingMode target:(id) target action:(SEL) action;
```

## Parameters

- `labels`: An array of localized label strings to use for the control’s segments.
- `trackingMode`: The selection mode for the control. The NSSegmentSwitchTracking enum describes the possible values and their effects.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized segmented control.

## See Also

### Creating a segmented control

- [segmentedControlWithImages:trackingMode:target:action:](init%28images_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided images.
