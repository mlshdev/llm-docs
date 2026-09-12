> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/validateapplicationscommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/validateapplicationscommand/command-data.dictionary)

# ValidateApplicationsCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 9.2+ · tvOS 10.2+ · visionOS 1.1+

The command to force validation of developer and universal provisioning profiles for enterprise apps.

## Declaration

```
object ValidateApplicationsCommand.Command
```

## Properties

- `Identifiers` — `[string]`: The bundle identifiers of the enterprise apps to include for validation of associated provisioning profiles, if you choose to provide them. Otherwise, validation occurs for the provisioning profiles for the installed managed apps.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ValidateApplications`
