> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidservicesensorcontroloptions

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
