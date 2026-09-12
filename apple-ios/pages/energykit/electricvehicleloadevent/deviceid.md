> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/deviceid](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/deviceid)

# deviceID

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The device’s unique stable identifier.

## Declaration

```swift
let deviceID: String
```

<a id="discussion"></a>

## Discussion

The max length is `64 UTF-8` bytes. UUID strings are permitted. The following are enforced as preconditions:

- Isn’t empty, and less than or equal to 64 UTF-8 bytes.
- Uses only alphanumeric, space, hyphen, and apostrophe characters.
- Starts and ends with an alphanumeric character.

## See Also

### Getting device information

- [deviceName](devicename.md): A human-readable name for the device.
