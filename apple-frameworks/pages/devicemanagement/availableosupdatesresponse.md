> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/availableosupdatesresponse](https://developer.apple.com/documentation/devicemanagement/availableosupdatesresponse)

# AvailableOSUpdatesResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

A response from the device after it processes the command to get a list of available operating-system updates for a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object AvailableOSUpdatesResponse
```

## Properties

- `AvailableOSUpdates` — `[AvailableOSUpdatesResponse.AvailableOSUpdatesItem]` (required): ~~An array of dictionaries that contains only the most recent available updates in iOS and tvOS, and possibly multiple available updates in macOS. Follow the instructions in the Managed Apps and Updates section of the Apple Software Lookup Service to find a complete catalog of iOS and tvOS updates.~~

  ~~In macOS 14 and later, `AvailableOSUpdates` doesn’t include InstallAssistant-based, full-replacement installers. It only contains over-the-air (OTA) updates. OTA updates can update or upgrade the OS and support all `InstallAction` options.~~

  ~~If a Software Update is actively managed by a Declarative Device Management Specific Enforcement configuration, the device ignores this command as it applies to the actively managed update. This command can return information for unmanaged updates, such as System Applications and Configuration Data. For information about available updates when using Declarative Device Management, see [Using the Apple Software Lookup Service](https://support.apple.com/guide/deployment/depafd2fad80/web).~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `CommandUUID` — `string`: The unique identifier of the command for this response.
- `EnrollmentID` — `string` (required): ~~The per-enrollment identifier for the device. The system requires this value if the enrollment type is a user enrollment.~~

  ~~Available: iOS 13+ | iPadOS 13+ | macOS 10.15+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `EnrollmentUserID` — `string` (required): ~~The per-enrollment identifier for the user. The system requires this value if the enrollment type is a user enrollment on the user channel.~~

  ~~Available: macOS 10.15+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `ErrorChain` — `[AvailableOSUpdatesResponse.ErrorChainItem]`: An array of dictionaries that describes any errors that occur.
- `NotOnConsole` — `boolean` (required): If `true`, the device isn’t on-console.
- `Status` — `string` (required): The status of the response, which is one of the following values:

  - `Acknowledged`: The device processed the command successfully.
  - `Error`: An error occurred. See the `ErrorChain` for more details.
  - `CommandFormatError`: A protocol error occurred, which can result from a malformed command.
  - `Idle`: The device is idle; there’s no status.
  - `NotNow`: The device received the command, but can’t run it.  
  **Allowed values:** `Acknowledged`, `Error`, `CommandFormatError`, `Idle`, `NotNow`
- `UDID` — `string` (required): ~~The device’s UDID (unique device identifier). The system requires this value if the enrollment type is a device enrollment.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `UserID` — `string`: ~~For macOS, this value is the ID of the user.~~

  ~~For Shared iPad, this value is `FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF` to indicate that authentication doesn’t occur.~~

  ~~Available: iOS 9.3+ | iPadOS 9.3+ | macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `UserLongName` — `string` (required): ~~The full name of the user.~~

  ~~Available: macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `UserShortName` — `string`: ~~For macOS, this value is the short name of the user.~~

  ~~For Shared iPad, this value is the Managed Apple Account identifier of the user on Shared iPad. It indicates that the token is for the user channel.~~

  ~~Available: iOS 9.3+ | iPadOS 9.3+ | macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+

## Topics

### Objects

- [AvailableOSUpdatesResponse.AvailableOSUpdatesItem](availableosupdatesresponse/availableosupdatesitem.md): Deprecated. The response dictionary that describes the available operating-system updates item.
- [AvailableOSUpdatesResponse.ErrorChainItem](availableosupdatesresponse/errorchainitem.md): Deprecated. A dictionary that describes an error chain item.

## See Also

### Commands and responses

- [AvailableOSUpdatesCommand](availableosupdatescommand.md): Deprecated. The command to get a list of available operating-system updates for a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
