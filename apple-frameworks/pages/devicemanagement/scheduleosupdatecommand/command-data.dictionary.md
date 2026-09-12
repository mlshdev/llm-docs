> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scheduleosupdatecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/scheduleosupdatecommand/command-data.dictionary)

# ScheduleOSUpdateCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

The command to schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: ~~If `true`, the device needs to be network-tethered to run the command.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `RequestType` — `string` (required): ~~The request type for this command.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Allowed values:** `ScheduleOSUpdate`
- `Updates` — `[ScheduleOSUpdateCommand.Command.UpdatesItem]` (required): ~~An array of dictionaries specifying the updates to download or install. If this value is missing, the device applies the default behavior for handling updates.~~ ~~The device ignores this command and returns an informational error if a Declarative Device Management [SoftwareUpdateEnforcementSpecific](../softwareupdateenforcementspecific.md) configuration manages the software update, as the configuration takes precedence.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+

## Topics

### Objects

- [ScheduleOSUpdateCommand.Command.UpdatesItem](command-data.dictionary/updatesitem.md): Deprecated. A dictionary that describes the available operating-system updates item.
