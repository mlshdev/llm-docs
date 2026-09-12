> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securityinfocommand](https://developer.apple.com/documentation/devicemanagement/securityinfocommand)

# SecurityInfoCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to get security-related information about a device.

## Declaration

```
object SecurityInfoCommand
```

## Properties

- `Command` — `SecurityInfoCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)
- [Managing passcodes](managing-passcodes.md)

## Topics

### Objects

- [SecurityInfoCommand.Command](securityinfocommand/command-data.dictionary.md): The command to get security-related information about a device.

## See Also

### Commands and responses

- [SecurityInfoResponse](securityinforesponse.md): A response from the device after it processes the command to get security-related information about a device.
