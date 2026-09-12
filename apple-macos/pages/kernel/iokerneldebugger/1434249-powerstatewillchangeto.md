> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iokerneldebugger/1434249-powerstatewillchangeto](https://developer.apple.com/documentation/kernel/iokerneldebugger/1434249-powerstatewillchangeto)

# powerStateWillChangeTo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn powerStateWillChangeTo(IOPMPowerFlags flags, unsigned long stateNumber, IOService *policyMaker);
```
