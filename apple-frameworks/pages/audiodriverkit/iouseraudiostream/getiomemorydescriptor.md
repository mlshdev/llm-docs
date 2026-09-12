> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/getiomemorydescriptor](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/getiomemorydescriptor)

# GetIOMemoryDescriptor

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the memory descriptor the stream uses for I/O.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetIOMemoryDescriptor();
```

<a id="Discussion"></a>

## Discussion

This is the value provided to the stream’s initializer, or updated later by a call to [SetIOMemoryDescriptor](setiomemorydescriptor.md).

## See Also

### Working with Memory Descriptors

- [SetIOMemoryDescriptor](setiomemorydescriptor.md): Sets the memory descriptor the stream uses for I/O.
