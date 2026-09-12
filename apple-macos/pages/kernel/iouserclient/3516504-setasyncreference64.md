> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/3516504-setasyncreference64](https://developer.apple.com/documentation/kernel/iouserclient/3516504-setasyncreference64)

# setAsyncReference64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static void setAsyncReference64(OSAsyncReference64 asyncRef, mach_port_t wakePort, mach_vm_address_t callback, io_user_reference_t refcon, task_t task);
```
