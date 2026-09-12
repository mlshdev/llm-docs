> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdevicemodelidentifier](https://developer.apple.com/documentation/devicemanagement/statusdevicemodelidentifier)

# StatusDeviceModelIdentifier

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that reports the device’s hardware model identifier.

## Declaration

```
object StatusDeviceModelIdentifier
```

## Properties

- `device.model.identifier` — `string` (required): A two-part string that specifies the device’s model. The first part specifies device’s model family, and the second part specifies the model’s version. The model’s version is a comma-separated number where the first part of the number is the version, and the second part is a variant, such as `MacBookPro15,1` or `iPhone13,2`.

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
            "identifier": "iPhone14,5"
        }
    }
}
```

## See Also

### Device property items

- [StatusDeviceBatteryHealth](statusdevicebatteryhealth.md): The status item that reports the device’s battery health.
- [StatusDeviceModelFamily](statusdevicemodelfamily.md): The status item that reports the device’s hardware model family.
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
