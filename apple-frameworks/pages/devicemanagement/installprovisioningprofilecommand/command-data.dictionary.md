> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installprovisioningprofilecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/installprovisioningprofilecommand/command-data.dictionary)

# InstallProvisioningProfileCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to install a provisioning profile on a device.

## Declaration

```
object InstallProvisioningProfileCommand.Command
```

## Properties

- `ProvisioningProfile` — `data` (required): The provisioning profile.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `InstallProvisioningProfile`
