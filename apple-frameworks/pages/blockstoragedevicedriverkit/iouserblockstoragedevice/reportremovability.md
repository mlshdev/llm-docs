> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/reportremovability

# ReportRemovability

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates whether the media is removable, in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t ReportRemovability(bool *isRemovable);
```

## Parameters

- `isRemovable`: An in/out Boolean parameter. On output, set this to `true` if the hardware supports removable media.

<a id="return-value"></a>

## Return Value

A value that indicates the report-removability result. Return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) to inidicate success. To indicate a failure, see [IOKit Constants](../../iokit/iokit_constants.md) for error definitions.

## See Also

### Reporting Device Capabilities

- [ReportEjectability](reportejectability.md): Returns a Boolean value that indicates whether the media is ejectable, in response to a call from the framework.
- [ReportWriteProtection](reportwriteprotection.md): Returns a Boolean value that indicates whether the media is write protected, in response to a call from the framework.
