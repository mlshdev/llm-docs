> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprotocolinterface/1571690-ssetuserclientexclusivitystate](https://developer.apple.com/documentation/kernel/ioscsiprotocolinterface/1571690-ssetuserclientexclusivitystate)

# sSetUserClientExclusivityState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void sSetUserClientExclusivityState(IOSCSIProtocolInterface *self, IOReturn *result, IOService *userClient, bool state);
```
