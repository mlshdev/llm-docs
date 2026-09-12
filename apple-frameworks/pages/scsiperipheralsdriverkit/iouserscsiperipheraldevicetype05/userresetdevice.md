> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/userresetdevice](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/userresetdevice)

# UserResetDevice

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Performs a bus reset of the external drive.

## Declaration

```objectivec
virtual kern_return_t UserResetDevice(SCSIServiceResponse *response);
```

## Parameters

- `response`: A pointer to a [SCSIServiceResponse](../../iokit/scsiserviceresponse.md) instance. On return, the framework populates this reference with the response from the protocol driver.

<a id="return-value"></a>

## Return Value

A value that indicates the result of the bus reset. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

## See Also

### Managing the device

- [UserInitializeDeviceSupport](userinitializedevicesupport.md): Performs enumeration-time initializations in response to a call from the framework.
