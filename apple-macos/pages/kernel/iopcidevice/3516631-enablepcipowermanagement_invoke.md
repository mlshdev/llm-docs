> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3516631-enablepcipowermanagement_invoke

# EnablePCIPowerManagement_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
static kern_return_t EnablePCIPowerManagement_Invoke(const IORPC rpc, OSMetaClassBase *target, EnablePCIPowerManagement_Handler func);
```
