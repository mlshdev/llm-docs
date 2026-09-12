> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/3325571-service_power_capabilities](https://developer.apple.com/documentation/driverkit/3325571-service_power_capabilities)

# Service Power Capabilities

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** API Collection

Constants that indicate the power state of a device.

## Topics

### Getting the Power Levels

- [kIOServicePowerCapabilityOff](kioservicepowercapabilityoff.md): The device is entering the sleep state.
- [kIOServicePowerCapabilityOn](kioservicepowercapabilityon.md): The device is fully powered.
- [kIOServicePowerCapabilityLow](kioservicepowercapabilitylow.md): The device is in a reduced power state, but the system is running.

## See Also

### Responding to Power-Level Changes

- [SetPowerState](ioservice/setpowerstate.md): Updates the service in response to power-related changes for a provider.
- [ChangePowerState](ioservice/changepowerstate.md): Changes the device’s power state to the specified level.
