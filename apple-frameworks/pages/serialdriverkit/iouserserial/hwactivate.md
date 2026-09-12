> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/hwactivate](https://developer.apple.com/documentation/serialdriverkit/iouserserial/hwactivate)

# HwActivate

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Opens the communication channel to the device.

## Declaration

```objectivec
virtual kern_return_t HwActivate();
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method and use your implementation to prepare the device’s hardware for serial communication. Always call the `super` version of the method at the beginning of your implementation.

## See Also

### Activating and Deactivating the Service

- [HwDeactivate](hwdeactivate.md): Closes the communication channel to the device.
