> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/provisioningprofilelistcommand](https://developer.apple.com/documentation/devicemanagement/provisioningprofilelistcommand)

# ProvisioningProfileListCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get a list of installed provisioning profiles on a device.

## Declaration

```
object ProvisioningProfileListCommand
```

## Properties

- `Command` — `ProvisioningProfileListCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [ProvisioningProfileListCommand.Command](provisioningprofilelistcommand/command-data.dictionary.md): The command to get a list of installed provisioning profiles on a device.

## See Also

### Commands and responses

- [ProvisioningProfileListResponse](provisioningprofilelistresponse.md): A response from the device after it processes the command to get a list of installed provisioning profiles on a device.
