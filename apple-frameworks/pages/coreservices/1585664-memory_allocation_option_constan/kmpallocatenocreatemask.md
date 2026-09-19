> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1585664-memory_allocation_option_constan/kmpallocatenocreatemask

# kMPAllocateNoCreateMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
kMPAllocateNoCreateMask = 0x0020
```

<a id="discussion"></a>

## Discussion

Do not attempt to create the pool if it does not yet exist.
