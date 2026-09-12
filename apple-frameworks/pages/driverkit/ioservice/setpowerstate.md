> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/setpowerstate](https://developer.apple.com/documentation/driverkit/ioservice/setpowerstate)

# SetPowerState

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Updates the service in response to power-related changes for a provider.

## Declaration

```objectivec
virtual kern_return_t SetPowerState(uint32_t powerFlags);
```

## Parameters

- `powerFlags`: The new power state for the service’s provider object. Configure your driver appropriately for the new state. For a list of possible values, see [Service Power Capabilities](../3325571-service_power_capabilities.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

DriverKit calls this method to notify your service when the power state of its provider changes. Implement this method in your service object and use it to put your driver in a safe state for the new power setting. Call `super` as the last step in your implementation.

## See Also

### Responding to Power-Level Changes

- [ChangePowerState](changepowerstate.md): Changes the device’s power state to the specified level.
- [Service Power Capabilities](../3325571-service_power_capabilities.md): Constants that indicate the power state of a device.
