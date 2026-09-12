> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmrootdomain/3553417-claimsystembootevent](https://developer.apple.com/documentation/kernel/iopmrootdomain/3553417-claimsystembootevent)

# claimSystemBootEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
void claimSystemBootEvent(IOService *device, IOOptionBits flags, const char *reason, OSObject *details);
```
