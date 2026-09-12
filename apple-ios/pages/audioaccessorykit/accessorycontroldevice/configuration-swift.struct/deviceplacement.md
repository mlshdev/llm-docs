> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct/deviceplacement](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct/deviceplacement)

# devicePlacement

**Framework:** AudioAccessoryKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+

The physical position of the accessory.

## Declaration

```swift
var devicePlacement: AccessoryControlDevice.Placement?
```

## Mentioned In

- [Supporting automatic audio switching for third-party accessories](../../supporting-automatic-audio-switching.md)

<a id="discussion"></a>

## Discussion

Update this property when your accessory detects a change in its position. If the accessory doesn’t support the [placement](../capabilities/placement.md) capability, the value of this property is always `nil`.

## See Also

### Accessing configuration options

- [deviceCapabilities](devicecapabilities.md): The capabilities the accessory supports.
- [primaryAudioSourceDeviceIdentifier](primaryaudiosourcedeviceidentifier.md): The Bluetooth address of the device providing the primary source of audio.
- [secondaryAudioSourceDeviceIdentifier](secondaryaudiosourcedeviceidentifier.md): The Bluetooth address of the device providing the secondary source of audio.
