> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbinterfaceinterfaceid183](https://developer.apple.com/documentation/iokit/kiousbinterfaceinterfaceid183)

# kIOUSBInterfaceInterfaceID183

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
#define kIOUSBInterfaceInterfaceID183
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a device interface corresponding to an IOUSBInterface user client in the kernel. The type of this device interface is IOUSBInterfaceInterface183. This device interface is obtained after the device interface for the service itself has been obtained.

**Note:** The IOUSBInterfaceInterface183 is returned only by version 1.8.3 or above of the IOUSBFamily. This version of IOUSBFamily shipped with OS X version 10.1. If your software is running on a version of macOS prior to 10.1 you will need to use the UUID kIOUSBInterfaceInterfaceID or kIOUSBInterfaceInterfaceID182 and you will not have access to some functions.

Example:

<a id="2556777"></a>

**Listing 1**

```occ
 
 
    IOCFPluginInterface             **iodev; 	// obtained earlier
 
    IOUSBInterfaceInterface183      **intf;     // fetching this now
    IOReturn                        err;
 
    err = (*iodev)->QueryInterface(iodev,
                                CFUUIDGetUUIDBytes(kIOUSBInterfaceInterfaceID183),
                                (LPVoid)&intf);
 
 
```
