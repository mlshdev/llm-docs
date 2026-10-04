> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usbpowerrequesttypes/kusbpowerduringwakeusb3

# kUSBPowerDuringWakeUSB3

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

## Declaration

```objectivec
kUSBPowerDuringWakeUSB3 = 7
```

<a id="discussion"></a>

## Discussion

This is used by the USB stack to allocate the 400mA extra for USB3, above the 500ma allocated by USB2
