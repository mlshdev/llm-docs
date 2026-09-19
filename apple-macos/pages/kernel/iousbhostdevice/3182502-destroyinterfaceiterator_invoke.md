> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/3182502-destroyinterfaceiterator_invoke

# DestroyInterfaceIterator_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t DestroyInterfaceIterator_Invoke(const IORPC rpc, OSMetaClassBase *target, DestroyInterfaceIterator_Handler func);
```
