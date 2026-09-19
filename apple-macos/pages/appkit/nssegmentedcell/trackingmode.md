> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssegmentedcell/trackingmode

# trackingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tracking mode used for the segments of the control.

## Declaration

```swift
var trackingMode: NSSegmentedControl.SwitchTracking { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values for `trackingMode` are described in [NSSegmentedControl.SwitchTracking](../nssegmentedcontrol/switchtracking.md). The default value is [NSSegmentedControl.SwitchTracking.selectOne](../nssegmentedcontrol/switchtracking/selectone.md).

# trackingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tracking mode used for the segments of the control.

## Declaration

```objectivec
@property NSSegmentSwitchTracking trackingMode;
```

<a id="Discussion"></a>

## Discussion

Possible values for `trackingMode` are described in [NSSegmentSwitchTracking](../nssegmentedcontrol/switchtracking.md). The default value is [NSSegmentSwitchTrackingSelectOne](../nssegmentedcontrol/switchtracking/selectone.md).
