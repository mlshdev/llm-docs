> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/scheduleosupdatecommand

# ScheduleOSUpdateCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

The command to schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateCommand
```

## Properties

- `Command` — `ScheduleOSUpdateCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ScheduleOSUpdateCommand.Command](scheduleosupdatecommand/command-data.dictionary.md): Deprecated. The command to schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

## See Also

### Commands and responses

- [ScheduleOSUpdateResponse](scheduleosupdateresponse.md): Deprecated. A response from the device after it processes the command to schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
