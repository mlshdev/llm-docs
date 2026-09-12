> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopslowbatterywarninglevel](https://developer.apple.com/documentation/iokit/iopslowbatterywarninglevel)

# IOPSLowBatteryWarningLevel

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

The battery can provide no more than 10 minutes of runtime.

## Declaration

```objectivec
typedef enum IOPSLowBatteryWarningLevel : unsigned int {
    ...
} IOPSLowBatteryWarningLevel;
```

<a id="overview"></a>

## Overview

macOS makes no guarantees that the system shall remain in Final Warning for 10 minutes. Batteries are frequently calibrated differently and may provide runtime for more, or less, than the estimated 10 minutes.

## Topics

### Constants

- [kIOPSLowBatteryWarningNone](iopslowbatterywarninglevel/kiopslowbatterywarningnone.md)
- [kIOPSLowBatteryWarningEarly](iopslowbatterywarninglevel/kiopslowbatterywarningearly.md)
- [kIOPSLowBatteryWarningFinal](iopslowbatterywarninglevel/kiopslowbatterywarningfinal.md)
