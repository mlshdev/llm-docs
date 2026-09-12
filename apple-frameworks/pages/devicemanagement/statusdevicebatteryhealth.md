> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdevicebatteryhealth](https://developer.apple.com/documentation/devicemanagement/statusdevicebatteryhealth)

# StatusDeviceBatteryHealth

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.4+

The status item that reports the device’s battery health.

## Declaration

```
object StatusDeviceBatteryHealth
```

## Properties

- `device.power.battery-health` — `string` (required): The battery health status, which has the following values:

  - `non-genuine`: The battery isn’t a genuine Apple battery.
  - `normal`: The battery is operating normally.
  - `service-recommended`: The system recommends battery service.
  - `unknown`: The system couldn’t determine battery health information.
  - `unsupported`: The device doesn’t support battery health reporting.

  Supported on iPhones, specific iPad models, and Mac computers with Apple silicon.  
  **Allowed values:** `non-genuine`, `normal`, `service-recommended`, `unknown`, `unsupported`

<a id="Discussion"></a>

## Discussion

For more information about battery health, see the following support articles:

- [iPhone devices](https://support.apple.com/101575)
- [iPad devices](https://support.apple.com/117759)
- [macOS devices](https://support.apple.com/108376)

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad |
| Allowed in device enrollment | iOS, Shared iPad |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | iOS, macOS, Shared iPad |
| Allowed in system scope | iOS, macOS, Shared iPad |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "device": {
        "power": {
            "battery-health": "normal"
        }
    }
}
```

## See Also

### Device property items

- [StatusDeviceModelFamily](statusdevicemodelfamily.md): The status item that reports the device’s hardware model family.
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
