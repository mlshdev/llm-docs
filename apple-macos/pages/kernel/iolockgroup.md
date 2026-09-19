> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iolockgroup

# IOLockGroup

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```objectivec
lck_grp_t *IOLockGroup;
```

<a id="discussion"></a>

## Discussion

Global lock group used by all IOKit locks. To simplify kext debugging and lock-heat analysis, consider using lck\_\* locks with a per-driver lock group, as defined in kern/locks.h.
