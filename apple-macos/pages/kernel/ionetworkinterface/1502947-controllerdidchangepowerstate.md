> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkinterface/1502947-controllerdidchangepowerstate](https://developer.apple.com/documentation/kernel/ionetworkinterface/1502947-controllerdidchangepowerstate)

# controllerDidChangePowerState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn controllerDidChangePowerState(IONetworkController *controller, IOPMPowerFlags flags, UInt32 stateNumber, IOService *policyMaker);
```
