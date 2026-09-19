> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/enableremotedesktopcommand/command-data.dictionary

# EnableRemoteDesktopCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.14.4+

The command to enable Remote Desktop on a device.

## Declaration

```
object EnableRemoteDesktopCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `EnableRemoteDesktop`
