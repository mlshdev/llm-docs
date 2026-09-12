> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavcunit/1553117-avcasynchrequestwritedone](https://developer.apple.com/documentation/kernel/iofirewireavcunit/1553117-avcasynchrequestwritedone)

# AVCAsynchRequestWriteDone

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void AVCAsynchRequestWriteDone(void *refcon, IOReturn status, IOFireWireNub *device, IOFWCommand *fwCmd);
```
