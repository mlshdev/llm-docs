> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicenotificationdispatchsource/3538526-create_call](https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource/3538526-create_call)

# Create_Call

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+

## Declaration

```objectivec
static kern_return_t Create_Call(OSDictionary *matching, uint64_t options, IODispatchQueue *queue, IOServiceNotificationDispatchSource **notification);
```
