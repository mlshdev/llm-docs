> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbdeviceuserclienttypeid](https://developer.apple.com/documentation/iokit/kiousbdeviceuserclienttypeid)

# kIOUSBDeviceUserClientTypeID

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define kIOUSBDeviceUserClientTypeID
```

<a id="discussion"></a>

## Discussion

This UUID constant is used to obtain a device interface corresponding to an io_service_t corresponding to an IOUSBDevice in the kernel. Once you have obtained the device interface for the service, you must use the QueryInterface function to obtain the device interface for the user client itself.

Example:

<a id="2556769"></a>

**Listing 1**

```occ
 
 
  io_service_t            usbDeviceRef;   // obtained earlier
 
  IOCFPlugInInterface     **iodev;        // fetching this now
 
  SInt32                  score;          // not used
  IOReturn                err;
 
  err = IOCreatePlugInInterfaceForService(usbDeviceRef,
                                    kIOUSBDeviceUserClientTypeID,
                                    kIOCFPlugInInterfaceID,
                                    &iodev,
                                    &score);
 
 
```
