> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiocontroluserclient/1430439-registernotificationport

# registerNotificationPort

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn registerNotificationPort(mach_port_t port, UInt32 type, UInt32 refCon);
```
