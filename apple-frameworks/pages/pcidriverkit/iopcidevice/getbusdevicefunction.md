> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/getbusdevicefunction](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/getbusdevicefunction)

# GetBusDeviceFunction

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

Returns the device’s bus, device, and function numbers.

## Declaration

```objectivec
virtual kern_return_t GetBusDeviceFunction(uint8_t *returnBusNumber, uint8_t *returnDeviceNumber, uint8_t *returnFunctionNumber);
```

## Parameters

- `returnBusNumber`: A variable in which you want to store the bus number.
- `returnDeviceNumber`: A variable in which you want to store the device number.
- `returnFunctionNumber`: A variable in which you want to store the function number.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Getting Device Information

- [FindPCICapability](findpcicapability.md): Search the configuration space for a PCI capability register.
- [PCI Capabilities](../pci-capabilities-enum.md): Constants that you use to get the capabilities of the PCI device.
- [Slot Capabilities](../slot-capabilities-enum.md): Constants that you use to get the slot-related capabilities of the PCI device.
