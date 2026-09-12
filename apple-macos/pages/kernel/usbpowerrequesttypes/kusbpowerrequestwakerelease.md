> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbpowerrequesttypes/kusbpowerrequestwakerelease](https://developer.apple.com/documentation/kernel/usbpowerrequesttypes/kusbpowerrequestwakerelease)

# kUSBPowerRequestWakeRelease

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The system requests a release of power upon waking.

## Declaration

```objectivec
kUSBPowerRequestWakeRelease = 2
```

<a id="discussion"></a>

## Discussion

When you use this enumeration with [ReturnExtraPower](https://developer.apple.com/documentation/iokit/iousbdeviceinterface942/2977171-returnextrapower), it  sends a message to all devices to return any extra wake power, if possible.
