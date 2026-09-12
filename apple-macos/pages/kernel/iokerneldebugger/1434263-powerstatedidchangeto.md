> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iokerneldebugger/1434263-powerstatedidchangeto](https://developer.apple.com/documentation/kernel/iokerneldebugger/1434263-powerstatedidchangeto)

# powerStateDidChangeTo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn powerStateDidChangeTo(IOPMPowerFlags flags, unsigned long stateNumber, IOService *policyMaker);
```
