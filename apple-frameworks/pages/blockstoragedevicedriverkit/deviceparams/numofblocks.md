> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/deviceparams/numofblocks](https://developer.apple.com/documentation/blockstoragedevicedriverkit/deviceparams/numofblocks)

# numOfBlocks

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 21.0+

The number of blocks on the device.

## Declaration

```objectivec
uint64_t numOfBlocks;
```

## See Also

### Accessing Device Parameters

- [blockSize](blocksize.md): The size of a block on the device.
- [maxIOSize](maxiosize.md): The maximum amount of data per I/O call.
- [numOfOutstandingIOs](numofoutstandingios.md): The upper limit to the number of requests sent to the device.
- [maxNumOfUnmapRegions](maxnumofunmapregions.md): The maximum number of regions supported by an unmap call.
- [minSegmentAlignment](minsegmentalignment.md): The minimum alignment of the data buffer sent to read-write calls.
- [numOfAddressBits](numofaddressbits.md): The number of bits used to address blocks on the device.
- [isUnmapSupported](isunmapsupported.md): A Boolean value that indicates whether the device supports unmapping to reclaim storage.
- [isFUASupported](isfuasupported.md): A Boolean value that indicates whether the device supports forced unit access (FUA).
