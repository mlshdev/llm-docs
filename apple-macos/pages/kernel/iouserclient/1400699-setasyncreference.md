> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1400699-setasyncreference](https://developer.apple.com/documentation/kernel/iouserclient/1400699-setasyncreference)

# setAsyncReference

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void setAsyncReference(OSAsyncReference asyncRef, mach_port_t wakePort, void *callback, void *refcon);
```
