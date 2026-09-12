> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationlistresponse](https://developer.apple.com/documentation/devicemanagement/managedapplicationlistresponse)

# ManagedApplicationListResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

A response from the device after it processes the command to get the status of all managed apps on a device.

## Declaration

```
object ManagedApplicationListResponse
```

## Properties

- `CommandUUID` — `string`: The unique identifier of the command for this response.
- `EnrollmentID` — `string` (required): The per-enrollment identifier for the device. The system requires this value if the enrollment type is a user enrollment.

  Available: iOS 13+ | iPadOS 13+ | macOS 10.15+ | visionOS 1.1+
- `EnrollmentUserID` — `string` (required): The per-enrollment identifier for the user. The system requires this value if the enrollment type is a user enrollment on the user channel.

  Available: macOS 10.15+
- `ErrorChain` — `[ManagedApplicationListResponse.ErrorChainItem]`: An array of dictionaries that describes any errors that occur.
- `ManagedApplicationList` — `ManagedApplicationListResponse.ManagedApplicationList` (required): A dictionary that contains status information about each managed app. The response doesn’t include apps that Declarative Device Management manages.
- `NotOnConsole` — `boolean` (required): If `true`, the device isn’t on-console.
- `Status` — `string` (required): The status of the response, which is one of the following values:

  - `Acknowledged`: The device processed the command successfully.
  - `Error`: An error occurred. See the `ErrorChain` for more details.
  - `CommandFormatError`: A protocol error occurred, which can result from a malformed command.
  - `Idle`: The device is idle; there’s no status.
  - `NotNow`: The device received the command, but can’t run it.  
  **Allowed values:** `Acknowledged`, `Error`, `CommandFormatError`, `Idle`, `NotNow`
- `UDID` — `string` (required): The device’s UDID (unique device identifier). The system requires this value if the enrollment type is a device enrollment.
- `UserID` — `string`: For macOS, this value is the ID of the user.

  For Shared iPad, this value is `FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF` to indicate that authentication doesn’t occur.

  Available: iOS 9.3+ | iPadOS 9.3+ | macOS 11+
- `UserLongName` — `string` (required): The full name of the user.

  Available: macOS 11+
- `UserShortName` — `string`: For macOS, this value is the short name of the user.

  For Shared iPad, this value is the Managed Apple Account identifier of the user on Shared iPad. It indicates that the token is for the user channel.

  Available: iOS 9.3+ | iPadOS 9.3+ | macOS 11+

## Topics

### Objects

- [ManagedApplicationListResponse.ErrorChainItem](managedapplicationlistresponse/errorchainitem.md): A dictionary that describes an error chain item.
- [ManagedApplicationListResponse.ManagedApplicationList](managedapplicationlistresponse/managedapplicationlist-data.dictionary.md): A dictionary that contains status information about managed apps.

## See Also

### Commands and responses

- [ManagedApplicationListCommand](managedapplicationlistcommand.md): The command to get the status of all managed apps on a device.
