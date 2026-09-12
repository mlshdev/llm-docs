> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/setiomemorydescriptor](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/setiomemorydescriptor)

# SetIOMemoryDescriptor

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the memory descriptor the stream uses for I/O.

## Declaration

```objectivec
kern_return_t SetIOMemoryDescriptor(IOMemoryDescriptor *in_io_memory_descriptor);
```

## See Also

### Working with Memory Descriptors

- [GetIOMemoryDescriptor](getiomemorydescriptor.md): Gets the memory descriptor the stream uses for I/O.
