> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/firewallsettings-data.dictionary](https://developer.apple.com/documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/firewallsettings-data.dictionary)

# SecurityInfoResponse.SecurityInfo.FirewallSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.12+

A dictionary that contains the firewall settings.

## Declaration

```
object SecurityInfoResponse.SecurityInfo.FirewallSettings
```

## Properties

- `Applications` — `[SecurityInfoResponse.SecurityInfo.FirewallSettings.ApplicationsItem]`: An array of dictionaries that describes the allowed applications.
- `BlockAllIncoming` — `boolean`: If `true`, the firewall blocks all incoming connections.
- `FirewallEnabled` — `boolean`: If `true`, the firewall is on.
- `LoggingEnabled` — `boolean`: If `true`, logging is enabled.

  Available: macOS 12+
- `LoggingOption` — `string`: The type of logging emitted by the firewall.

  Available: macOS 12+  
  **Allowed values:** `throttled`, `brief`, `detail`
- `StealthMode` — `boolean`: If true, stealth mode is active for the firewall.

## Topics

### Objects

- [SecurityInfoResponse.SecurityInfo.FirewallSettings.ApplicationsItem](firewallsettings-data.dictionary/applicationsitem.md): A dictionary that describes the allowed apps.

## See Also

### Objects

- [SecurityInfoResponse.SecurityInfo.FirmwarePasswordStatus](firmwarepasswordstatus-data.dictionary.md): A dictionary that contains the status of the EFI firmware password.
- [SecurityInfoResponse.SecurityInfo.ManagementStatus](managementstatus-data.dictionary.md): A dictionary that contains the status of the device’s MDM enrollment.
- [SecurityInfoResponse.SecurityInfo.SecureBoot](secureboot-data.dictionary.md): The response object for the secure boot settings.
