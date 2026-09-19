> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3516636-getbusdevicefunction_impl

# GetBusDeviceFunction_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
kern_return_t GetBusDeviceFunction_Impl(uint8_t *returnBusNumber, uint8_t *returnDeviceNumber, uint8_t *returnFunctionNumber);
```
