> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbinterfaceinterfaceid197](https://developer.apple.com/documentation/iokit/kiousbinterfaceinterfaceid197)

# kIOUSBInterfaceInterfaceID197

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
#define kIOUSBInterfaceInterfaceID197
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a device interface corresponding to an IOUSBInterface user client in the kernel. The type of this device interface is IOUSBInterfaceInterface197. This device interface is obtained after the device interface for the service itself has been obtained.

**Note:** The IOUSBInterfaceInterface197 is returned only by version 1.9.7 or above of the IOUSBFamily. This version of IOUSBFamily shipped with OS X version 10.2.5. If your software is running on a version of macOS prior to 10.2.5 you will need to use the UUID kIOUSBInterfaceInterfaceID, kIOUSBInterfaceInterfaceID182, kIOUSBInterfaceInterfaceID183, kIOUSBInterfaceInterfaceID190, or kIOUSBInterfaceInterfaceID192 and you will not have access to some functions.

Example:

<a id="2556786"></a>

**Listing 1**

```occ
 
 
    IOCFPluginInterface             **iodev; 	// obtained earlier
 
    IOUSBInterfaceInterface197      **intf;     // fetching this now
    IOReturn                        err;
 
    err = (*iodev)->QueryInterface(iodev,
                                CFUUIDGetUUIDBytes(kIOUSBInterfaceInterfaceID197),
                                (LPVoid)&intf);
 
 
```
