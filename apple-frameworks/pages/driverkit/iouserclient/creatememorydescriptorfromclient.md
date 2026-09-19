> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iouserclient/creatememorydescriptorfromclient

# CreateMemoryDescriptorFromClient

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 20.0+ · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CreateMemoryDescriptorFromClient(uint64_t memoryDescriptorCreateOptions, uint32_t segmentsCount, const IOAddressSegment segments[32], IOMemoryDescriptor **memory);
```

## See Also

### Instance Methods

- [CopyClientEntitlements](copycliententitlements.md)
