> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohiddevicetransactioninterfaceid](https://developer.apple.com/documentation/iokit/kiohiddevicetransactioninterfaceid)

# kIOHIDDeviceTransactionInterfaceID

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
#define kIOHIDDeviceTransactionInterfaceID
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a transaction interface corresponding to an IOHIDDevice service in the kernel. The type of this queue interface is IOHIDDeviceTransactionInterface. This device interface is obtained after the device interface for the service itself has been obtained.

**Note:** Please note that subsequent calls to QueryInterface with the UUID kIOHIDDeviceTransactionInterfaceID, will return a retained instance of a new IOHIDDeviceTransactionInterface.

Example:

<a id="2556616"></a>

**Listing 1**

```occ
 
 
    IOCFPluginInterface **              iodev;  // obtained earlier
 
    IOHIDDeviceTransactionInterface	**  intf;   // fetching this now
    IOReturn                            err;
 
    err = (*iodev)->QueryInterface(iodev,
                                CFUUIDGetUUIDBytes(kIOHIDDeviceTransactionInterfaceID),
                                (LPVoid)&intf);
 
 
```
