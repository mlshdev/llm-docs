> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4090620-mcc_memory_error_notification](https://developer.apple.com/documentation/kernel/4090620-mcc_memory_error_notification)

# mcc_memory_error_notification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t mcc_memory_error_notification(mach_port_t memory_error_port, mcc_ecc_event_t event, audit_token_t atoken);
```
