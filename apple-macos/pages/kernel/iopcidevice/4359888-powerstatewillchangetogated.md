> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/4359888-powerstatewillchangetogated](https://developer.apple.com/documentation/kernel/iopcidevice/4359888-powerstatewillchangetogated)

# powerStateWillChangeToGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
virtual IOReturn powerStateWillChangeToGated(IOPMPowerFlags *capabilities, unsigned long *stateNumber, IOService *whatDevice);
```
