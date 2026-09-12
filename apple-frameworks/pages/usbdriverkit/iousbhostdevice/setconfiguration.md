> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/setconfiguration](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/setconfiguration)

# SetConfiguration

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Selects a new configuration for the device.

## Declaration

```objectivec
virtual kern_return_t SetConfiguration(uint8_t bConfigurationValue, bool matchInterfaces);
```

## Parameters

- `bConfigurationValue`: The configuration to select. You can get this value from the [bConfigurationValue](../iousbconfigurationdescriptor/bconfigurationvalue.md) field of the [IOUSBConfigurationDescriptor](../iousbconfigurationdescriptor.md) structure.
- `matchInterfaces`: A Boolean value indicating whether you want the system to perform matching on the interfaces of the new configuration. Specify [false](https://developer.apple.com/documentation/swift/false) to skip the matching process.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method terminates all previously configured child interfaces and sets the new configuration for the device. This method sends a `SET_CONFIGURATION` control request (USB 2.0, section 9.4.7) to the device. When making the `GET_DESCRIPTOR` control request, this method acquires the service’s workloop lock and may call [commandSleep](https://developer.apple.com/documentation/kernel/iocommandgate/1573818-commandsleep).
