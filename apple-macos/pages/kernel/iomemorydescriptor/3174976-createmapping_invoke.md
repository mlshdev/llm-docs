> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3174976-createmapping_invoke](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3174976-createmapping_invoke)

# CreateMapping_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CreateMapping_Invoke(const IORPC rpc, OSMetaClassBase *target, CreateMapping_Handler func);
```

## See Also

### Managing Internal Structures

- [reserved](reserved.md)
- [initialize](1441798-initialize.md)
- [Dispatch](3180641-dispatch.md)
- [populateDevicePager](1442017-populatedevicepager.md)
- [CreateMapping](3174974-createmapping.md)
- [CreateMapping_Impl](3174975-createmapping_impl.md)
- [Map](3180643-map.md): Maps memory internally.
- [addMapping](1442013-addmapping.md)
- [removeMapping](1441778-removemapping.md)
- [makeMapping](1441923-makemapping.md)
- [doMap](1441941-domap.md)
- [doUnmap](1441883-dounmap.md)
- [handleFault](1441782-handlefault.md)
- [redirect](1441871-redirect.md)
