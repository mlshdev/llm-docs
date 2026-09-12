> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installprofilecommand](https://developer.apple.com/documentation/devicemanagement/installprofilecommand)

# InstallProfileCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to install a configuration profile on a device.

## Declaration

```
object InstallProfileCommand
```

## Properties

- `Command` — `InstallProfileCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [InstallProfileCommand.Command](installprofilecommand/command-data.dictionary.md): The command to install a configuration profile on a device.

## See Also

### Commands and responses

- [InstallProfileResponse](installprofileresponse.md): A response from the device after it processes the command to install a configuration profile on a device.
