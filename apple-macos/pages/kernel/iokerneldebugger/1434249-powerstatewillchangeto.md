> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iokerneldebugger/1434249-powerstatewillchangeto

# powerStateWillChangeTo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn powerStateWillChangeTo(IOPMPowerFlags flags, unsigned long stateNumber, IOService *policyMaker);
```
