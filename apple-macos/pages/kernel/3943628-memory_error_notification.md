> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3943628-memory_error_notification](https://developer.apple.com/documentation/kernel/3943628-memory_error_notification)

# memory_error_notification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t memory_error_notification(mach_port_t memory_error_port, ecc_event_t event, audit_token_t atoken);
```
