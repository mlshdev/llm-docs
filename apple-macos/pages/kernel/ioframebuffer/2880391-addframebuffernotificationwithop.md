> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioframebuffer/2880391-addframebuffernotificationwithop

# addFramebufferNotificationWithOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

## Declaration

```objectivec
IONotifier * addFramebufferNotificationWithOptions(IOFramebufferNotificationHandler handler, OSObject *target, void *ref, IOSelect groupID, IOIndex groupPriority, IOSelect events);
```
