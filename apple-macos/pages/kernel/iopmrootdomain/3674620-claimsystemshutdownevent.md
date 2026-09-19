> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmrootdomain/3674620-claimsystemshutdownevent

# claimSystemShutdownEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
void claimSystemShutdownEvent(IOService *device, IOOptionBits flags, const char *reason, OSObject *details);
```
