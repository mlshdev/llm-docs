> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1442199-uio_create

# uio_create

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
uio_t uio_create(int a_iovcount, off_t a_offset, int a_spacetype, int a_iodirection);
```
