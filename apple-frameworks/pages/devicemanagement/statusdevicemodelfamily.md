> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdevicemodelfamily](https://developer.apple.com/documentation/devicemanagement/statusdevicemodelfamily)

# StatusDeviceModelFamily

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that reports the device’s hardware model family.

## Declaration

```
object StatusDeviceModelFamily
```

## Properties

- `device.model.family` — `string` (required): The hardware family of the device, such as `Mac`, `iPhone`, or `iPad`.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in system scope | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in user scope | macOS, Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "device": {
        "model": {
            "family": "iPhone"
        }
    }
}
```

## See Also

### Device property items

- [StatusDeviceBatteryHealth](statusdevicebatteryhealth.md): The status item that reports the device’s battery health.
- [StatusDeviceModelIdentifier](statusdevicemodelidentifier.md): The status item that reports the device’s hardware model identifier.
- [StatusDeviceModelMarketingName](statusdevicemodelmarketingname.md): The status item that reports the device’s model marketing name.
- [StatusDeviceModelNumber](statusdevicemodelnumber.md): The status item that reports the device’s hardware number.
- [StatusDeviceOperatingSystemBuildVersion](statusdeviceoperatingsystembuildversion.md): The status item that reports the device’s operating system build version.
- [StatusDeviceOperatingSystemFamily](statusdeviceoperatingsystemfamily.md): The status item that reports the device’s operating system family.
- [StatusDeviceOperatingSystemMarketingName](statusdeviceoperatingsystemmarketingname.md): The status item that reports the device’s operating system marketing name.
- [StatusDeviceOperatingSystemSupplementalBuildVersion](statusdeviceoperatingsystemsupplementalbuildversion.md): The status item that reports the device’s operating system supplemental build version and Background Security Improvement version.
- [StatusDeviceOperatingSystemSupplementalExtraVersion](statusdeviceoperatingsystemsupplementalextraversion.md): The status item that reports the device’s operating system Background Security Improvement version.
- [StatusDeviceOperatingSystemVersion](statusdeviceoperatingsystemversion.md): The status item that reports the device’s operating system version.
- [StatusDeviceSerialNumber](statusdeviceserialnumber.md): The status item that reports the device’s serial number.
- [StatusDeviceSystemHealth](statusdevicesystemhealth.md): The status item that reports the device’s system health.
- [StatusDeviceUDID](statusdeviceudid.md): The status item that reports the device’s UDID.
