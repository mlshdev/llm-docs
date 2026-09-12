> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbinterfaceinterfaceid](https://developer.apple.com/documentation/iokit/kiousbinterfaceinterfaceid)

# kIOUSBInterfaceInterfaceID

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define kIOUSBInterfaceInterfaceID
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a device interface corresponding to an IOUSBInterface user client in the kernel. The type of this device interface is IOUSBInterfaceInterface. This device interface is obtained after the device interface for the service itself has been obtained.

**Note:** The IOUSBInterfaceInterface is returned by all versions of the IOUSBFamily currently shipping. However, there are some functions which are available only in IOUSBFamily version 1.8.2 and above. Access to these functions, as well as to all of the functions contained in IOUSBInterfaceInterface, can be obtained by using one of the other UUIDs listed in this header.

Example:

<a id="2556771"></a>

**Listing 1**

```occ
 
 
    IOCFPluginInterface		**iodev; 	// obtained earlier
 
    IOUSBInterfaceInterface	**intf;		// fetching this now
    IOReturn                    err;
 
    err = (*iodev)->QueryInterface(iodev,
                                CFUUIDGetUUIDBytes(kIOUSBInterfaceInterfaceID),
                                (LPVoid)&intf);
 
 
```
