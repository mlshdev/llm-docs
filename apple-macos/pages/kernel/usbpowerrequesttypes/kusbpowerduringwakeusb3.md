> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbpowerrequesttypes/kusbpowerduringwakeusb3](https://developer.apple.com/documentation/kernel/usbpowerrequesttypes/kusbpowerduringwakeusb3)

# kUSBPowerDuringWakeUSB3

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.8+

The system requests extra power allocation.

## Declaration

```objectivec
kUSBPowerDuringWakeUSB3 = 7
```

<a id="discussion"></a>

## Discussion

The USB stack uses this enumeration to allocate the 400 milliamps extra for USB 3.0 above the 500 milliamps that USB 2.0 allocates.
