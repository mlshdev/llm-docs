> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installprovisioningprofilecommand](https://developer.apple.com/documentation/devicemanagement/installprovisioningprofilecommand)

# InstallProvisioningProfileCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to install a provisioning profile on a device.

## Declaration

```
object InstallProvisioningProfileCommand
```

## Properties

- `Command` — `InstallProvisioningProfileCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [InstallProvisioningProfileCommand.Command](installprovisioningprofilecommand/command-data.dictionary.md): The command to install a provisioning profile on a device.

## See Also

### Commands and responses

- [InstallProvisioningProfileResponse](installprovisioningprofileresponse.md): A response from the device after it processes the command to install a provisioning profile on a device.
