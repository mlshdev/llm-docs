> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3180692-changepowerstate](https://developer.apple.com/documentation/kernel/ioservice/3180692-changepowerstate)

# ChangePowerState

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Changes the device's power state to the specified level.

## Declaration

```objectivec
virtual kern_return_t ChangePowerState(uint32_t powerFlags);
```

```objectivec
kern_return_t ChangePowerState(uint32_t powerFlags, OSDispatchMethod supermethod);
```

## Parameters

- `powerFlags`: The new power state for the device. Typically, you specify only [kIOServicePowerCapabilityLow](https://developer.apple.com/documentation/driverkit/kioservicepowercapabilitylow) for this parameter. For a list of all possible values, see [Service Power Capabilities](https://developer.apple.com/documentation/driverkit/3325571-service_power_capabilities).

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

<a id="discussion"></a>

## Discussion

If the new state is different than the device's current state, this method places an asynchronous request to change the state to the new value. If the change is successful, the system subsequently calls the [SetPowerState](3180704-setpowerstate.md) method of your service.

## See Also

### Responding to Power-Level Changes

- [SetPowerState](3180704-setpowerstate.md): Updates the service in response to power-related changes for a provider.
- [Service Power Capabilities](https://developer.apple.com/documentation/driverkit/3325571-service_power_capabilities): Constants that indicate the power state of a device.
