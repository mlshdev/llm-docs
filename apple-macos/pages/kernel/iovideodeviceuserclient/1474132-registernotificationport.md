> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iovideodeviceuserclient/1474132-registernotificationport

# registerNotificationPort

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerNotificationPort(mach_port_t port, UInt32 portType, UInt32 refCon);
```
