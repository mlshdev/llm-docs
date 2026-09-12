> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/removeprovisioningprofilecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/removeprovisioningprofilecommand/command-data.dictionary)

# RemoveProvisioningProfileCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to remove a previously installed provisioning profile from a device.

## Declaration

```
object RemoveProvisioningProfileCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `RemoveProvisioningProfile`
- `UUID` — `string` (required): The unique identifier of the provisioning profile to remove.
