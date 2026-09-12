> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohiddevicedeviceinterfaceid](https://developer.apple.com/documentation/iokit/kiohiddevicedeviceinterfaceid)

# kIOHIDDeviceDeviceInterfaceID

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
#define kIOHIDDeviceDeviceInterfaceID
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a device interface corresponding to an IOHIDDevice service in the kernel. The type of this device interface is IOHIDDeviceDeviceInterface. This device interface is obtained after the IOCFPlugInInterface for the service itself has been obtained.

**Note:** Please note that subsequent calls to QueryInterface with the UUID kIOHIDDeviceTransactionInterfaceID, will return a retained instance of an existing IOHIDDeviceTransactionInterface.

Example:

<a id="2556612"></a>

**Listing 1**

```occ
 
 
    IOCFPluginInterface **          iodev;  // obtained earlier
 
    IOHIDDeviceDeviceInterface **   dev;    // fetching this now
    IOReturn                        err;
 
    err = (*iodev)->QueryInterface(iodev,
                                    CFUUIDGetUUIDBytes(kIOHIDDeviceDeviceInterfaceID),
                                    (LPVoid)&dev);
 
 
```
