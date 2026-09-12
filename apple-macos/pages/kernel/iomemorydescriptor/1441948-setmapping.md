> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1441948-setmapping](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1441948-setmapping)

# setMapping

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Establishes an already existing mapping.

## Declaration

```objectivec
virtual OSPtr<IOMemoryMap> setMapping(task_t task, IOVirtualAddress mapAddress, IOOptionBits options);
```

## Parameters

- `task`: Address space in which the mapping exists.
- `mapAddress`: Virtual address of the mapping.
- `options`: Caching and read-only attributes of the mapping.

<a id="return_value"></a>

## Return Value

A IOMemoryMap object created to represent the mapping.

<a id="discussion"></a>

## Discussion

This method tells the IOMemoryDescriptor about a mapping that exists, but was created elsewhere. It allows later callers of the map method to share this externally created mapping. The IOMemoryMap object returned is created to represent it. This method is not commonly needed.

## See Also

### Mapping to the Other Address Spaces

- [createMappingInTask](1812752-createmappingintask.md): Maps an IOMemoryDescriptor into a task.
- [createMappingInTask](1441859-createmappingintask.md): Maps an IOMemoryDescriptor into a task.
- [map](1812830-map.md): Maps an IOMemoryDescriptor into the kernel map.
- [map](1441908-map.md): Maps an IOMemoryDescriptor into the kernel map.
- [setMapping](1812859-setmapping.md): Establishes an already existing mapping.
