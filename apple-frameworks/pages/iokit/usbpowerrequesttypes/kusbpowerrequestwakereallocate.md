> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usbpowerrequesttypes/kusbpowerrequestwakereallocate](https://developer.apple.com/documentation/iokit/usbpowerrequesttypes/kusbpowerrequestwakereallocate)

# kUSBPowerRequestWakeReallocate

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
kUSBPowerRequestWakeReallocate = 4
```

<a id="discussion"></a>

## Discussion

When used with ReturnExtraPower(), it will send a message to all devices indicating that they can ask for more wake power, as some device has released it.
