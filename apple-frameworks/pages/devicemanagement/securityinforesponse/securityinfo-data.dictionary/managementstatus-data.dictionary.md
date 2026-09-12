> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/managementstatus-data.dictionary](https://developer.apple.com/documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/managementstatus-data.dictionary)

# SecurityInfoResponse.SecurityInfo.ManagementStatus

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.13.2+ · tvOS 13.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains the status of the device’s MDM enrollment.

## Declaration

```
object SecurityInfoResponse.SecurityInfo.ManagementStatus
```

## Properties

- `EnrolledViaDEP` — `boolean`: If `true`, the device enrolled in MDM through Automated Device Enrollment (ADE).

  Available: macOS 10.13.2+
- `IsActivationLockManageable` — `boolean`: If `true`, the type of enrollment allows the MDM to manage Activation Lock for this device.

  Available: macOS 10.15+
- `IsUserEnrollment` — `boolean`: If `true`, the device is user-enrolled.

  Available: iOS 13+ | iPadOS 13+ | macOS 10.15+ | tvOS 13+ | visionOS 1.1+ | watchOS 10+
- `UserApprovedEnrollment` — `boolean`: If `true`, the enrollment was user-approved. If `false`, the device may reject certain security-sensitive payloads or commands.

  Available: macOS 10.13.2+

## See Also

### Objects

- [SecurityInfoResponse.SecurityInfo.FirewallSettings](firewallsettings-data.dictionary.md): A dictionary that contains the firewall settings.
- [SecurityInfoResponse.SecurityInfo.FirmwarePasswordStatus](firmwarepasswordstatus-data.dictionary.md): A dictionary that contains the status of the EFI firmware password.
- [SecurityInfoResponse.SecurityInfo.SecureBoot](secureboot-data.dictionary.md): The response object for the secure boot settings.
