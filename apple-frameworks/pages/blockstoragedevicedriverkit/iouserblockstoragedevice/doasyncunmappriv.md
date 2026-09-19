> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/doasyncunmappriv

# DoAsyncUnmapPriv

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
virtual kern_return_t DoAsyncUnmapPriv(uint32_t requestID, struct BlockRange *ranges, uint32_t numOfRanges);
```

## See Also

### Instance Methods

- [RegisterDext](registerdext.md)
