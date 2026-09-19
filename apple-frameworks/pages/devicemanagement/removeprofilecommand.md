> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/removeprofilecommand

# RemoveProfileCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to remove a previously installed profile from the device.

## Declaration

```
object RemoveProfileCommand
```

## Properties

- `Command` — `RemoveProfileCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RemoveProfileCommand.Command](removeprofilecommand/command-data.dictionary.md): The command to remove a previously installed profile from the device.

## See Also

### Commands and responses

- [RemoveProfileResponse](removeprofileresponse.md): A response from the device after it processes the command to remove a previously installed profile from the device.
