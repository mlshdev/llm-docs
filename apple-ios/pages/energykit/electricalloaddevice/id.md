> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricalloaddevice/id](https://developer.apple.com/documentation/energykit/electricalloaddevice/id)

# id

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A unique, stable identifier for a device.

## Declaration

```swift
let id: String
```

<a id="discussion"></a>

## Discussion

Provide this identifier when you create an [ElectricalLoadDevice](../electricalloaddevice.md) instance for submitting electrical load events. The EnergyKit framework uses this identifier to associate events with devices and generate device-specific insights.

The system expects the value to be a maximum of 64 UTF-8 characters, such as a UUID. Ensure the identifier:

- Isn’t empty, and is less than or equal to 64 characters
- Uses only alphanumeric, space, hyphen, and apostrophe characters
- Starts and ends with an alphanumeric character

## See Also

### Getting device information

- [name](name.md): A human-readable name for the device.
- [type](type.md): The type of electrical load device.
- [ElectricalLoadDevice.DeviceType](devicetype.md): The type of electrical load device.
