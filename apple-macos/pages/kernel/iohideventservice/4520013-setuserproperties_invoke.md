> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/4520013-setuserproperties_invoke

# SetUserProperties_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t SetUserProperties_Invoke(const IORPC rpc, OSMetaClassBase *target, SetUserProperties_Handler func, const OSMetaClass *targetActionClass);
```
