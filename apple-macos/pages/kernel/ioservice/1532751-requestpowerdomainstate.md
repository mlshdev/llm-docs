> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532751-requestpowerdomainstate](https://developer.apple.com/documentation/kernel/ioservice/1532751-requestpowerdomainstate)

# requestPowerDomainState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn requestPowerDomainState(IOPMPowerFlags desiredState, IOPowerConnection *whichChild, unsigned long specificationFlags);
```
