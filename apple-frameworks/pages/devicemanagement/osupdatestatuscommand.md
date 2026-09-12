> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/osupdatestatuscommand](https://developer.apple.com/documentation/devicemanagement/osupdatestatuscommand)

# OSUpdateStatusCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11.5+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

The command to get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object OSUpdateStatusCommand
```

## Properties

- `Command` — `OSUpdateStatusCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [OSUpdateStatusCommand.Command](osupdatestatuscommand/command-data.dictionary.md): Deprecated. The command to get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.

## See Also

### Commands and responses

- [OSUpdateStatusResponse](osupdatestatusresponse.md): Deprecated. A response from the device after it processes the command to get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.
