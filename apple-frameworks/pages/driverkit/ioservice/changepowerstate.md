> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/changepowerstate](https://developer.apple.com/documentation/driverkit/ioservice/changepowerstate)

# ChangePowerState

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Changes the device’s power state to the specified level.

## Declaration

```objectivec
virtual kern_return_t ChangePowerState(uint32_t powerFlags);
```

## Parameters

- `powerFlags`: The new power state for the device. Typically, you specify only [kIOServicePowerCapabilityLow](../kioservicepowercapabilitylow.md) for this parameter. For a list of all possible values, see [Service Power Capabilities](../3325571-service_power_capabilities.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

If the new state is different than the device’s current state, this method places an asynchronous request to change the state to the new value. If the change is successful, the system subsequently calls the [SetPowerState](setpowerstate.md) method of your service.

## See Also

### Responding to Power-Level Changes

- [SetPowerState](setpowerstate.md): Updates the service in response to power-related changes for a provider.
- [Service Power Capabilities](../3325571-service_power_capabilities.md): Constants that indicate the power state of a device.
