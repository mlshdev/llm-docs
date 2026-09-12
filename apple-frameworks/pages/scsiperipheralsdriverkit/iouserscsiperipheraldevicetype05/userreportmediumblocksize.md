> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/userreportmediumblocksize](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/userreportmediumblocksize)

# UserReportMediumBlockSize

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Provides a report on the external device’s block size.

## Declaration

```objectivec
virtual kern_return_t UserReportMediumBlockSize(UInt64 *blockSize);
```

## Parameters

- `blockSize`: On return, the external device’s block size.

<a id="return-value"></a>

## Return Value

A value that indicates the result of the report request. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

This call populates `blockSize` with the granularity of the block size, such as 512 bytes or 4096 bytes (4 KB).
