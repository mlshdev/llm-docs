> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3516635-getbusdevicefunction](https://developer.apple.com/documentation/kernel/iopcidevice/3516635-getbusdevicefunction)

# GetBusDeviceFunction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
kern_return_t GetBusDeviceFunction(uint8_t *returnBusNumber, uint8_t *returnDeviceNumber, uint8_t *returnFunctionNumber, OSDispatchMethod supermethod);
```
