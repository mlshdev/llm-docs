> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3943628-memory_error_notification

# memory_error_notification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t memory_error_notification(mach_port_t memory_error_port, ecc_event_t event, audit_token_t atoken);
```
