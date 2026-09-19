> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/removeprovisioningprofilecommand

# RemoveProvisioningProfileCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to remove a previously installed provisioning profile from a device.

## Declaration

```
object RemoveProvisioningProfileCommand
```

## Properties

- `Command` — `RemoveProvisioningProfileCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RemoveProvisioningProfileCommand.Command](removeprovisioningprofilecommand/command-data.dictionary.md): The command to remove a previously installed provisioning profile from a device.

## See Also

### Commands and responses

- [RemoveProvisioningProfileResponse](removeprovisioningprofileresponse.md): A response from the device after it processes the command to remove a previously installed provisioning profile from a device.
