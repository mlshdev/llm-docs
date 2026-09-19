> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprotocolinterface/1571690-ssetuserclientexclusivitystate

# sSetUserClientExclusivityState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void sSetUserClientExclusivityState(IOSCSIProtocolInterface *self, IOReturn *result, IOService *userClient, bool state);
```
