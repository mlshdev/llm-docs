> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1537285-exc_server

# exc_server

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
boolean_t exc_server(mach_msg_header_t *InHeadP, mach_msg_header_t *OutHeadP);
```
