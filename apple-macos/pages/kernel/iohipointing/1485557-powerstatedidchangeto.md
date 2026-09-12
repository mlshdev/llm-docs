> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohipointing/1485557-powerstatedidchangeto](https://developer.apple.com/documentation/kernel/iohipointing/1485557-powerstatedidchangeto)

# powerStateDidChangeTo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual IOReturn powerStateDidChangeTo(IOPMPowerFlags powerFlags, unsigned long newState, IOService *device);
```
