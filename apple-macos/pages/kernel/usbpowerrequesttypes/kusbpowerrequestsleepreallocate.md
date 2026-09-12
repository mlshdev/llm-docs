> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbpowerrequesttypes/kusbpowerrequestsleepreallocate](https://developer.apple.com/documentation/kernel/usbpowerrequesttypes/kusbpowerrequestsleepreallocate)

# kUSBPowerRequestSleepReallocate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The system requests power reallocation upon sleeping.

## Declaration

```objectivec
kUSBPowerRequestSleepReallocate = 5
```

<a id="discussion"></a>

## Discussion

When you use this enumeration with [ReturnExtraPower](https://developer.apple.com/documentation/iokit/iousbdeviceinterface942/2977171-returnextrapower), it sends a message to all devices to return more sleep power because some devices have released it.
