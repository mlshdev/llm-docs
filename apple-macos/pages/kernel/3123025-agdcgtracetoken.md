> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3123025-agdcgtracetoken](https://developer.apple.com/documentation/kernel/3123025-agdcgtracetoken)

# agdcGTraceToken

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
void agdcGTraceToken(const IOFramebuffer *fb, const uint16_t line, const bool useController, const uint16_t fnID, const uint8_t fnType, const uint16_t tag1, const uint64_t arg1, const uint16_t tag2, const uint64_t arg2, const uint16_t tag3, const uint64_t arg3);
```

## See Also

### Framebuffer Utilities

- [VSLDisposeInterruptService](1573084-vsldisposeinterruptservice.md)
- [VSLDoInterruptService](1573107-vsldointerruptservice.md)
- [VSLNewInterruptService](1573117-vslnewinterruptservice.md)
- [VSLPrepareCursorForHardwareCursor](1573096-vslpreparecursorforhardwarecurso.md)
