> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3180704-setpowerstate](https://developer.apple.com/documentation/kernel/ioservice/3180704-setpowerstate)

# SetPowerState

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Updates the service in response to power-related changes for a provider.

## Declaration

```objectivec
virtual kern_return_t SetPowerState(uint32_t powerFlags);
```

```objectivec
kern_return_t SetPowerState(uint32_t powerFlags, OSDispatchMethod supermethod);
```

## Parameters

- `powerFlags`: The new power state for the service's provider object. Configure your driver appropriately for the new state. For a list of possible values, see [Service Power Capabilities](https://developer.apple.com/documentation/driverkit/3325571-service_power_capabilities).

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

<a id="discussion"></a>

## Discussion

DriverKit calls this method to notify your service when the power state of its provider changes. Implement this method in your service object and use it to put your driver in a safe state for the new power setting. Call `super` as the last step in your implementation.

## See Also

### Responding to Power-Level Changes

- [ChangePowerState](3180692-changepowerstate.md): Changes the device's power state to the specified level.
- [Service Power Capabilities](https://developer.apple.com/documentation/driverkit/3325571-service_power_capabilities): Constants that indicate the power state of a device.
