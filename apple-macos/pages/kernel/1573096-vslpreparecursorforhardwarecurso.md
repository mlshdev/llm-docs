> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1573096-vslpreparecursorforhardwarecurso](https://developer.apple.com/documentation/kernel/1573096-vslpreparecursorforhardwarecurso)

# VSLPrepareCursorForHardwareCursor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
Boolean VSLPrepareCursorForHardwareCursor(void *cursorRef, IOHardwareCursorDescriptor *hardwareDescriptor, IOHardwareCursorInfo *hwCursorInfo);
```

## See Also

### Framebuffer Utilities

- [agdcGTraceToken](3123025-agdcgtracetoken.md)
- [VSLDisposeInterruptService](1573084-vsldisposeinterruptservice.md)
- [VSLDoInterruptService](1573107-vsldointerruptservice.md)
- [VSLNewInterruptService](1573117-vslnewinterruptservice.md)
