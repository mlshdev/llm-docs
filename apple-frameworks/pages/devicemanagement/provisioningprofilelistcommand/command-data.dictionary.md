> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/provisioningprofilelistcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/provisioningprofilelistcommand/command-data.dictionary)

# ProvisioningProfileListCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get a list of installed provisioning profiles on a device.

## Declaration

```
object ProvisioningProfileListCommand.Command
```

## Properties

- `ManagedOnly` — `boolean`: If `true`, only include profiles that MDM has installed. For user enrollments, the device ignores this key and always limits the results to managed profiles.

  Available: iOS 13+ | iPadOS 13+ | macOS 11+ | tvOS 13+ | visionOS 1.1+ | watchOS 10+  
  **Default:** `false`
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ProvisioningProfileList`
