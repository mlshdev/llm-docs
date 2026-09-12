> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/init(images:trackingmode:target:action:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/init(images:trackingmode:target:action:))

# init(images:trackingMode:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a standard segmented control containing one segment for each of the provided images.

## Declaration

```swift
convenience init(images: [NSImage], trackingMode: NSSegmentedControl.SwitchTracking, target: Any?, action: Selector?)
```

## Parameters

- `images`: An array of image objects to use for the control’s segments.
- `trackingMode`: The selection mode for the control. The NSSegmentSwitchTracking enum describes the possible values and their effects.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized segmented control.

<a id="discussion"></a>

## Discussion

To ensure accessibility for this control, set the `accessibilityDescription` property on each of the provided images.

## See Also

### Creating a segmented control

- [init(labels:trackingMode:target:action:)](init%28labels_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided labels.

# segmentedControlWithImages:trackingMode:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a standard segmented control containing one segment for each of the provided images.

## Declaration

```objectivec
+ (instancetype) segmentedControlWithImages:(NSArray<NSImage *> *) images trackingMode:(NSSegmentSwitchTracking) trackingMode target:(id) target action:(SEL) action;
```

## Parameters

- `images`: An array of image objects to use for the control’s segments.
- `trackingMode`: The selection mode for the control. The NSSegmentSwitchTracking enum describes the possible values and their effects.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized segmented control.

<a id="discussion"></a>

## Discussion

To ensure accessibility for this control, set the `accessibilityDescription` property on each of the provided images.

## See Also

### Creating a segmented control

- [segmentedControlWithLabels:trackingMode:target:action:](init%28labels_trackingmode_target_action_%29.md): Creates a standard segmented control containing one segment for each of the provided labels.
