> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmrootdomain/1579148-claimsystemwakeevent](https://developer.apple.com/documentation/kernel/iopmrootdomain/1579148-claimsystemwakeevent)

# claimSystemWakeEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
void claimSystemWakeEvent(IOService *device, IOOptionBits flags, const char *reason, OSObject *details);
```
