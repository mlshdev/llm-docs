> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3325809-kernelcompletion_impl

# KernelCompletion_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
void KernelCompletion_Impl(OSAction *action, IOReturn status, const unsigned long long *asyncData, uint32_t asyncDataCount);
```
