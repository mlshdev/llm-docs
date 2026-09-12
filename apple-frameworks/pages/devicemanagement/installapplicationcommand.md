> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installapplicationcommand](https://developer.apple.com/documentation/devicemanagement/installapplicationcommand)

# InstallApplicationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to install a third-party app on a device.

## Declaration

```
object InstallApplicationCommand
```

## Properties

- `Command` — `InstallApplicationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Allowing and denying apps and binaries](allowing-and-denying-apps-and-binaries.md)

## Topics

### Objects

- [InstallApplicationCommand.Command](installapplicationcommand/command-data.dictionary.md): The command to install a third-party app on a device.

## See Also

### Commands and responses

- [InstallApplicationResponse](installapplicationresponse.md): A response from the device after it processes the command to install a third-party app on a device.
