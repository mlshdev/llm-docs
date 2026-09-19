> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/1400633-setasyncreference64

# setAsyncReference64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void setAsyncReference64(OSAsyncReference64 asyncRef, mach_port_t wakePort, mach_vm_address_t callback, io_user_reference_t refcon);
```
