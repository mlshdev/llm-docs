> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/hwdeactivate](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/hwdeactivate)

# HwDeactivate

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Closes the communication channel to the device.

## Declaration

```objectivec
virtual kern_return_t HwDeactivate();
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method and use it to close the connection to your device’s hardware. Always call the `super` version of the method at the end of your implementation.

## See Also

### Activating and Deactivating the Service

- [HwActivate](hwactivate.md): Opens the communication channel to the device.
