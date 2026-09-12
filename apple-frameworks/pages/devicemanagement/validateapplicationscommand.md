> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/validateapplicationscommand](https://developer.apple.com/documentation/devicemanagement/validateapplicationscommand)

# ValidateApplicationsCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 9.2+ · tvOS 10.2+ · visionOS 1.1+

The command to force validation of developer and universal provisioning profiles for enterprise apps.

## Declaration

```
object ValidateApplicationsCommand
```

## Properties

- `Command` — `ValidateApplicationsCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ValidateApplicationsCommand.Command](validateapplicationscommand/command-data.dictionary.md): The command to force validation of developer and universal provisioning profiles for enterprise apps.

## See Also

### Commands and responses

- [ValidateApplicationsResponse](validateapplicationsresponse.md): A response from the device after it processes the command to force validation of developer and universal provisioning profiles for enterprise apps.
