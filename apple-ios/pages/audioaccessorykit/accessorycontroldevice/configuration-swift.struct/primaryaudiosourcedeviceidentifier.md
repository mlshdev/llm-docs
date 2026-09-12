> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct/primaryaudiosourcedeviceidentifier](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct/primaryaudiosourcedeviceidentifier)

# primaryAudioSourceDeviceIdentifier

**Framework:** AudioAccessoryKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+

The Bluetooth address of the device providing the primary source of audio.

## Declaration

```swift
var primaryAudioSourceDeviceIdentifier: Data?
```

<a id="discussion"></a>

## Discussion

If the accessory is connected to only one device, set it as the primary device. If the accessory doesn’t support the [audioSwitching](../capabilities/audioswitching.md) capability, the value of this property is always `nil`.

## See Also

### Accessing configuration options

- [deviceCapabilities](devicecapabilities.md): The capabilities the accessory supports.
- [devicePlacement](deviceplacement.md): The physical position of the accessory.
- [secondaryAudioSourceDeviceIdentifier](secondaryaudiosourcedeviceidentifier.md): The Bluetooth address of the device providing the secondary source of audio.
