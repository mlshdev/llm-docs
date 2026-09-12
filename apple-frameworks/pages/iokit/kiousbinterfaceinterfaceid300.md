> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbinterfaceinterfaceid300](https://developer.apple.com/documentation/iokit/kiousbinterfaceinterfaceid300)

# kIOUSBInterfaceInterfaceID300

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
#define kIOUSBInterfaceInterfaceID300
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a device interface corresponding to an IOUSBInterface user client in the kernel. The type of this device interface is IOUSBInterfaceInterface300. This device interface is obtained after the device interface for the service itself has been obtained.

**Note:** The IOUSBInterfaceInterface300 is returned only by version 3.0.0 or above of the IOUSBFamily. This version of IOUSBFamily shipped with OS X version 10.5. If your software is running on a version of macOS prior to 10.5 you will need to use the UUID kIOUSBInterfaceInterfaceID, kIOUSBInterfaceInterfaceID182, kIOUSBInterfaceInterfaceID183, kIOUSBInterfaceInterfaceID190, kIOUSBInterfaceInterfaceID192, kIOUSBInterfaceInterfaceID197, kIOUSBInterfaceInterfaceID220, or kIOUSBInterfaceInterfaceID245 and you will not have access to some functions.

Example:

<a id="2556796"></a>

**Listing 1**

```occ
 
 
 IOCFPluginInterface             **iodev; 	// obtained earlier
 
 IOUSBInterfaceInterface300      **intf;     // fetching this now
 IOReturn                        err;
 
 err = (*iodev)->QueryInterface(iodev,
                                CFUUIDGetUUIDBytes(kIOUSBInterfaceInterfaceID300),
                                (LPVoid)&intf);
 
 
```
