> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1402376-mach_vm_allocate

# mach_vm_allocate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
kern_return_t mach_vm_allocate(vm_map_t target, mach_vm_address_t *address, mach_vm_size_t size, int flags);
```

## See Also

### Creation and Destruction

- [mach_vm_deallocate](1402285-mach_vm_deallocate.md)
