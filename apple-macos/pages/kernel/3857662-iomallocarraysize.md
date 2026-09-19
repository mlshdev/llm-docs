> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3857662-iomallocarraysize

# IOMallocArraySize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
vm_size_t IOMallocArraySize(vm_size_t hdr_size, vm_size_t elem_size, vm_size_t elem_count);
```
