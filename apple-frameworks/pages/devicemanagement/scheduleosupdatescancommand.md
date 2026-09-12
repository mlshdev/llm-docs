> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scheduleosupdatescancommand](https://developer.apple.com/documentation/devicemanagement/scheduleosupdatescancommand)

# ScheduleOSUpdateScanCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+ (deprecated in 26.0)

The command to schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateScanCommand
```

## Properties

- `Command` — `ScheduleOSUpdateScanCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ScheduleOSUpdateScanCommand.Command](scheduleosupdatescancommand/command-data.dictionary.md): Deprecated. The command to schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

## See Also

### Commands and responses

- [ScheduleOSUpdateScanResponse](scheduleosupdatescanresponse.md): Deprecated. A response from the device after it processes the command to schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
