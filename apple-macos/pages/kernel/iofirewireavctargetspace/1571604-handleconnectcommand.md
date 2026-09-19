> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571604-handleconnectcommand

# handleConnectCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn handleConnectCommand(UInt16 nodeID, UInt32 generation, const char *buf, UInt32 len);
```
