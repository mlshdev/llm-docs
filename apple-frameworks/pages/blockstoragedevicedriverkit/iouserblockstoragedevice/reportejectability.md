> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/reportejectability](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/reportejectability)

# ReportEjectability

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates whether the media is ejectable, in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t ReportEjectability(bool *isEjectable);
```

## Parameters

- `isEjectable`: An in/out Boolean parameter. On output, set this to `true` if the hardware supports ejecting the media.

<a id="return-value"></a>

## Return Value

A value that indicates the report-ejectability result. Return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) to inidicate success. To indicate a failure, see [IOKit Constants](../../iokit/iokit_constants.md) for error definitions.

## See Also

### Reporting Device Capabilities

- [ReportRemovability](reportremovability.md): Returns a Boolean value that indicates whether the media is removable, in response to a call from the framework.
- [ReportWriteProtection](reportwriteprotection.md): Returns a Boolean value that indicates whether the media is write protected, in response to a call from the framework.
