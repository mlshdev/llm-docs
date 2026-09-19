> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4090620-mcc_memory_error_notification

# mcc_memory_error_notification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t mcc_memory_error_notification(mach_port_t memory_error_port, mcc_ecc_event_t event, audit_token_t atoken);
```
