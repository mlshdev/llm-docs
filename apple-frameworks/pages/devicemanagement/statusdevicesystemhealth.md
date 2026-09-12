> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdevicesystemhealth](https://developer.apple.com/documentation/devicemanagement/statusdevicesystemhealth)

# StatusDeviceSystemHealth

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The status item that reports the device’s system health.

## Declaration

```
object StatusDeviceSystemHealth
```

## Properties

- `device.system.health` — `StatusDeviceSystemHealthDeviceSystemHealthObject` (required): A dictionary where each key represents a hardware component name and each value is a string indicating the component’s health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.
  - `non-genuine`: The component isn’t a genuine Apple component.

  Not all keys are supported on each device. The dictionary includes only components that are present and reportable on the device.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, Shared iPad |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, Shared iPad |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "device": {
        "system": {
            "health": {
                "Camera": "ok",
                "Display": "ok",
                "FaceID": "ok"
            }
        }
    }
}
```

## Topics

### Objects

- [StatusDeviceSystemHealthDeviceSystemHealthObject](statusdevicesystemhealthdevicesystemhealthobject.md): A dictionary where each key represents a hardware component name and each value is a string indicating the component’s health status, which has the following values:

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
- [StatusDeviceOperatingSystemSupplementalExtraVersion](statusdeviceoperatingsystemsupplementalextraversion.md): The status item that reports the device’s operating system Background Security Improvement version.
- [StatusDeviceOperatingSystemVersion](statusdeviceoperatingsystemversion.md): The status item that reports the device’s operating system version.
- [StatusDeviceSerialNumber](statusdeviceserialnumber.md): The status item that reports the device’s serial number.
- [StatusDeviceUDID](statusdeviceudid.md): The status item that reports the device’s UDID.
