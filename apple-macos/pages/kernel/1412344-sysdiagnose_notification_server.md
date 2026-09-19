> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1412344-sysdiagnose_notification_server

# sysdiagnose_notification_server

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.11+

## Declaration

```objectivec
boolean_t sysdiagnose_notification_server(mach_msg_header_t *InHeadP, mach_msg_header_t *OutHeadP);
```
