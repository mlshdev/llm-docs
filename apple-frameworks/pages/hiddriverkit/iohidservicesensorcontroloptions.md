> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidservicesensorcontroloptions](https://developer.apple.com/documentation/hiddriverkit/iohidservicesensorcontroloptions)

# IOHIDServiceSensorControlOptions

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
typedef enum { ... } IOHIDServiceSensorControlOptions;
```

<a id="overview"></a>

## Overview

List of control options  for sensor controls in HID event system

Options define behavior of HID event system for handling kIOHIDServiceReportIntervalKey & kIOHIDServiceBatchIntervalKey and associated event dispatch to kIOHIDEventSystemClientTypeRateControlled clients

## Topics

### Enumeration Cases

- [kIOHIDServiceSensorControlAggregation](iohidservicesensorcontroloptions/kiohidservicesensorcontrolaggregation.md)
- [kIOHIDServiceSensorControlDecimation](iohidservicesensorcontroloptions/kiohidservicesensorcontroldecimation.md)
- [kIOHIDServiceSensorControlDispatchControl](iohidservicesensorcontroloptions/kiohidservicesensorcontroldispatchcontrol.md)
