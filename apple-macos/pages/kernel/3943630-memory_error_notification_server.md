> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3943630-memory_error_notification_server

# memory_error_notification_server

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
boolean_t memory_error_notification_server(mach_msg_header_t *InHeadP, mach_msg_header_t *OutHeadP);
```
