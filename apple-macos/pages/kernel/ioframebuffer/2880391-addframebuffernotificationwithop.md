> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioframebuffer/2880391-addframebuffernotificationwithop](https://developer.apple.com/documentation/kernel/ioframebuffer/2880391-addframebuffernotificationwithop)

# addFramebufferNotificationWithOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

## Declaration

```objectivec
IONotifier * addFramebufferNotificationWithOptions(IOFramebufferNotificationHandler handler, OSObject *target, void *ref, IOSelect groupID, IOIndex groupPriority, IOSelect events);
```
