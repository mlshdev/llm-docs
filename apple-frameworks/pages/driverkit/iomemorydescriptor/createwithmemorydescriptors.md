> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorydescriptor/createwithmemorydescriptors](https://developer.apple.com/documentation/driverkit/iomemorydescriptor/createwithmemorydescriptors)

# CreateWithMemoryDescriptors

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 20.0+ · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t CreateWithMemoryDescriptors(uint64_t memoryDescriptorCreateOptions, uint32_t withDescriptorsCount, IOMemoryDescriptor * const withDescriptors[32], IOMemoryDescriptor **memory);
```

## See Also

### Type Methods

- [CreateSubMemoryDescriptor](createsubmemorydescriptor.md)
