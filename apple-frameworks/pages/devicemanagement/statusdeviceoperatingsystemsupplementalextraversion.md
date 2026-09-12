> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdeviceoperatingsystemsupplementalextraversion](https://developer.apple.com/documentation/devicemanagement/statusdeviceoperatingsystemsupplementalextraversion)

# StatusDeviceOperatingSystemSupplementalExtraVersion

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.1+ · watchOS 10.0+

The status item that reports the device’s operating system Background Security Improvement version.

## Declaration

```
object StatusDeviceOperatingSystemSupplementalExtraVersion
```

## Properties

- `device.operating-system.supplemental.extra-version` — `string` (required): The operating system’s Background Security Improvement version in use on the device, for example, `a`.

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)

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
        "operating-system": {
            "supplemental": {
                "extra-version": "a"
            }
        }
    }
}
```

## See Also

### Device property items

- [StatusDeviceBatteryHealth](statusdevicebatteryhealth.md): The status item that reports the device’s battery health.
- [StatusDeviceModelFamily](statusdevicemodelfamily.md): The status item that reports the device’s hardware model family.
- [StatusDeviceModelIdentifier](statusdevicemodelidentifier.md): The status item that reports the device’s hardware model identifier.
- [StatusDeviceModelMarketingName](statusdevicemodelmarketingname.md): The status item that reports the device’s model marketing name.
- [StatusDeviceModelNumber](statusdevicemodelnumber.md): The status item that reports the device’s hardware number.
- [StatusDeviceOperatingSystemBuildVersion](statusdeviceoperatingsystembuildversion.md): The status item that reports the device’s operating system build version.
- [StatusDeviceOperatingSystemFamily](statusdeviceoperatingsystemfamily.md): The status item that reports the device’s operating system family.
- [StatusDeviceOperatingSystemMarketingName](statusdeviceoperatingsystemmarketingname.md): The status item that reports the device’s operating system marketing name.
- [StatusDeviceOperatingSystemSupplementalBuildVersion](statusdeviceoperatingsystemsupplementalbuildversion.md): The status item that reports the device’s operating system supplemental build version and Background Security Improvement version.
- [StatusDeviceOperatingSystemVersion](statusdeviceoperatingsystemversion.md): The status item that reports the device’s operating system version.
- [StatusDeviceSerialNumber](statusdeviceserialnumber.md): The status item that reports the device’s serial number.
- [StatusDeviceSystemHealth](statusdevicesystemhealth.md): The status item that reports the device’s system health.
- [StatusDeviceUDID](statusdeviceudid.md): The status item that reports the device’s UDID.
