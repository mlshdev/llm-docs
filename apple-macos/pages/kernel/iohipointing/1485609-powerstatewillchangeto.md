> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohipointing/1485609-powerstatewillchangeto](https://developer.apple.com/documentation/kernel/iohipointing/1485609-powerstatewillchangeto)

# powerStateWillChangeTo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual IOReturn powerStateWillChangeTo(IOPMPowerFlags powerFlags, unsigned long newState, IOService *device);
```
