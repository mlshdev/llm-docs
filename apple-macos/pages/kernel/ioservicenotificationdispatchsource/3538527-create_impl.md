> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicenotificationdispatchsource/3538527-create_impl](https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource/3538527-create_impl)

# Create_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+

## Declaration

```objectivec
static kern_return_t Create_Impl(OSDictionary *matching, uint64_t options, IODispatchQueue *queue, IOServiceNotificationDispatchSource **notification);
```
