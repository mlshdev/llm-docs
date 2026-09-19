> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioframebuffershared_h_user-space/framebufferconstants

# FramebufferConstants

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
enum {
   // version for IOFBCreateSharedCursor
   kIOFBShmemVersionMask = 0x000000ff,
   kIOFBTenPtOneShmemVersion = 2,
   kIOFBTenPtTwoShmemVersion = 3,
   kIOFBCurrentShmemVersion = 2,
   // number of frames in animating cursor (if > kIOFBTenPtTwoShmemVersion)
   kIOFBShmemCursorNumFramesMask = 0x00ff0000,
   kIOFBShmemCursorNumFramesShift = 16,
   // memory types for IOConnectMapMemory.
   kIOFBCursorMemory = 100
};
```

## Topics

### Constants

- [kIOFBCurrentShmemVersion](../1589180-anonymous/kiofbcurrentshmemversion.md)
- [kIOFBCursorMemory](../1589180-anonymous/kiofbcursormemory.md)
