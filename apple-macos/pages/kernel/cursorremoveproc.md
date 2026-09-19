> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/cursorremoveproc

# CursorRemoveProc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*CursorRemoveProc)(IOFramebuffer *inst, void *shmem, volatile unsigned char *vramPtr, unsigned int vramRow, int width, int height);
```
