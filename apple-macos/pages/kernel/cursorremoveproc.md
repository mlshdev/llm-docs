> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/cursorremoveproc](https://developer.apple.com/documentation/kernel/cursorremoveproc)

# CursorRemoveProc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*CursorRemoveProc)(IOFramebuffer *inst, void *shmem, volatile unsigned char *vramPtr, unsigned int vramRow, int width, int height);
```
