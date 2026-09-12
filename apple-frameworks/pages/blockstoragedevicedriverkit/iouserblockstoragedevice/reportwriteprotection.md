> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/reportwriteprotection](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/reportwriteprotection)

# ReportWriteProtection

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates whether the media is write protected, in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t ReportWriteProtection(bool *isWriteProtected);
```

## Parameters

- `isWriteProtected`: An in/out Boolean parameter. On output, set this to `true` if the media is write-protected.

<a id="return-value"></a>

## Return Value

A value that indicates the report-write-protection result. Return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) to inidicate success. To indicate a failure, see [IOKit Constants](../../iokit/iokit_constants.md) for error definitions.

## See Also

### Reporting Device Capabilities

- [ReportEjectability](reportejectability.md): Returns a Boolean value that indicates whether the media is ejectable, in response to a call from the framework.
- [ReportRemovability](reportremovability.md): Returns a Boolean value that indicates whether the media is removable, in response to a call from the framework.
