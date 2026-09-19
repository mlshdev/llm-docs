> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/activensextensionscommand/command-data.dictionary

# ActiveNSExtensionsCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to get a list of active extensions for a user on a device.

## Declaration

```
object ActiveNSExtensionsCommand.Command
```

## Properties

- `FilterExtensionPoints` — `[string]`: An array of extension points. If you choose to provide this value, the response only includes the app extensions for the extension points you specify.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ActiveNSExtensions`
