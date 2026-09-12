> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbpowerrequesttypes/kusbpowerrequestsleeprelease](https://developer.apple.com/documentation/kernel/usbpowerrequesttypes/kusbpowerrequestsleeprelease)

# kUSBPowerRequestSleepRelease

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The system requests a release of power upon sleeping.

## Declaration

```objectivec
kUSBPowerRequestSleepRelease = 3
```

<a id="discussion"></a>

## Discussion

When you use this enumeration with [ReturnExtraPower](https://developer.apple.com/documentation/iokit/iousbdeviceinterface942/2977171-returnextrapower), it sends a message to all devices to return any sleep power, if possible.
