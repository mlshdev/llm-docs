> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iomemorydescriptor/createsubmemorydescriptor

# CreateSubMemoryDescriptor

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 20.0+ · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t CreateSubMemoryDescriptor(uint64_t memoryDescriptorCreateOptions, uint64_t offset, uint64_t length, IOMemoryDescriptor *ofDescriptor, IOMemoryDescriptor **memory);
```

## See Also

### Type Methods

- [CreateWithMemoryDescriptors](createwithmemorydescriptors.md)
