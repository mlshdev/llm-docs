> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/nsextensionmappingscommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/nsextensionmappingscommand/command-data.dictionary)

# NSExtensionMappingsCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to get a list of the installed extensions for a user on a device.

## Declaration

```
object NSExtensionMappingsCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `NSExtensionMappings`
