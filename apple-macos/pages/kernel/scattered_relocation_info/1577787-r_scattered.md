> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/scattered_relocation_info/1577787-r_scattered

# r_scattered

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

If this bit is 0, this structure is actually a [relocation_info](../relocation_info.md) structure.

## Declaration

```objectivec
uint32_t r_scattered:1;
```
