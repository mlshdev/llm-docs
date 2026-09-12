> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/1543447-powerstatewillchangetogated](https://developer.apple.com/documentation/kernel/iousbhostdevice/1543447-powerstatewillchangetogated)

# powerStateWillChangeToGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn powerStateWillChangeToGated(IOPMPowerFlags capabilities, unsigned long stateNumber, IOService *whatDevice);
```
