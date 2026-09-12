> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1573117-vslnewinterruptservice](https://developer.apple.com/documentation/kernel/1573117-vslnewinterruptservice)

# VSLNewInterruptService

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSErr VSLNewInterruptService(RegEntryID *serviceDevice, InterruptServiceType serviceType, InterruptServiceIDPtr serviceID);
```

## See Also

### Framebuffer Utilities

- [agdcGTraceToken](3123025-agdcgtracetoken.md)
- [VSLDisposeInterruptService](1573084-vsldisposeinterruptservice.md)
- [VSLDoInterruptService](1573107-vsldointerruptservice.md)
- [VSLPrepareCursorForHardwareCursor](1573096-vslpreparecursorforhardwarecurso.md)
