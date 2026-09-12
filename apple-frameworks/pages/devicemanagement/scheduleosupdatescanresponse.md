> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scheduleosupdatescanresponse](https://developer.apple.com/documentation/devicemanagement/scheduleosupdatescanresponse)

# ScheduleOSUpdateScanResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+ (deprecated in 26.0)

A response from the device after it processes the command to schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateScanResponse
```

## Properties

- `CommandUUID` — `string`: The unique identifier of the command for this response.
- `EnrollmentID` — `string` (required): ~~The per-enrollment identifier for the device. The system requires this value if the enrollment type is a user enrollment.~~

  ~~Available: iOS 13+ | iPadOS 13+ | macOS 10.15+~~
  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `EnrollmentUserID` — `string` (required): ~~The per-enrollment identifier for the user. The system requires this value if the enrollment type is a user enrollment on the user channel.~~

  ~~Available: macOS 10.15+~~
  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `ErrorChain` — `[ScheduleOSUpdateScanResponse.ErrorChainItem]`: An array of dictionaries that describes any errors that occur.
- `NotOnConsole` — `boolean` (required): If `true`, the device isn’t on-console.
- `ScanInitiated` — `boolean` (required): ~~If `true`, the scan started successfully.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `Status` — `string` (required): The status of the response, which is one of the following values:

  - `Acknowledged`: The device processed the command successfully.
  - `Error`: An error occurred. See the `ErrorChain` for more details.
  - `CommandFormatError`: A protocol error occurred, which can result from a malformed command.
  - `Idle`: The device is idle; there’s no status.
  - `NotNow`: The device received the command, but can’t run it.  
  **Allowed values:** `Acknowledged`, `Error`, `CommandFormatError`, `Idle`, `NotNow`
- `UDID` — `string` (required): ~~The device’s UDID (unique device identifier). The system requires this value if the enrollment type is a device enrollment.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `UserID` — `string`: ~~For macOS, this value is the ID of the user.~~

  ~~For Shared iPad, this value is `FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF` to indicate that authentication doesn’t occur.~~

  ~~Available: iOS 9.3+ | iPadOS 9.3+ | macOS 10.11+~~
  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `UserLongName` — `string` (required): ~~The full name of the user.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `UserShortName` — `string`: ~~For macOS, this value is the short name of the user.~~

  ~~For Shared iPad, this value is the Managed Apple Account identifier of the user on Shared iPad. It indicates that the token is for the user channel.~~

  ~~Available: iOS 9.3+ | iPadOS 9.3+ | macOS 10.11+~~
  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+

## Topics

### Objects

- [ScheduleOSUpdateScanResponse.ErrorChainItem](scheduleosupdatescanresponse/errorchainitem.md): Deprecated. A dictionary that describes an error chain item.

## See Also

### Commands and responses

- [ScheduleOSUpdateScanCommand](scheduleosupdatescancommand.md): Deprecated. The command to schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
