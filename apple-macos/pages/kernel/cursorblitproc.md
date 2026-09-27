> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/cursorblitproc

# CursorBlitProc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*CursorBlitProc)(IOFramebuffer *inst, void *shmem, volatile unsigned char *vramPtr, unsigned int cursStart, unsigned int vramRow, unsigned int cursRow, int width, int height);
```
