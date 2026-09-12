> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/configureinterrupts](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configureinterrupts)

# ConfigureInterrupts

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
virtual kern_return_t ConfigureInterrupts(uint32_t interruptType, uint32_t numRequired, uint32_t numRequested, IOOptionBits options);
```
