> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbpowerrequesttypes

# USBPowerRequestTypes

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
typedef enum USBPowerRequestTypes : unsigned int {
    ...
} USBPowerRequestTypes;
```

<a id="overview"></a>

## Overview

Used to specify what kind of power will be reserved using the IOUSBDevice RequestExtraPower and ReturnExtraPower APIs.

## Topics

### Constants

- [kUSBPowerDuringSleep](usbpowerrequesttypes/kusbpowerduringsleep.md)
- [kUSBPowerDuringWake](usbpowerrequesttypes/kusbpowerduringwake.md)
- [kUSBPowerRequestWakeRelease](usbpowerrequesttypes/kusbpowerrequestwakerelease.md)
- [kUSBPowerRequestSleepRelease](usbpowerrequesttypes/kusbpowerrequestsleeprelease.md)
- [kUSBPowerRequestWakeReallocate](usbpowerrequesttypes/kusbpowerrequestwakereallocate.md)
- [kUSBPowerRequestSleepReallocate](usbpowerrequesttypes/kusbpowerrequestsleepreallocate.md)
- [kUSBPowerDuringWakeRevocable](usbpowerrequesttypes/kusbpowerduringwakerevocable.md)
- [kUSBPowerDuringWakeUSB3](usbpowerrequesttypes/kusbpowerduringwakeusb3.md)
