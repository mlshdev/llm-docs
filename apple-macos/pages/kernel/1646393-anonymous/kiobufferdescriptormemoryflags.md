> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646393-anonymous/kiobufferdescriptormemoryflags

# kIOBufferDescriptorMemoryFlags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOBufferDescriptorMemoryFlags = kIOMemoryDirectionMask
	    | kIOMemoryThreadSafe
	    | kIOMemoryClearEncrypt
	    | kIOMemoryMapperNone
	    | kIOMemoryUseReserve
```
