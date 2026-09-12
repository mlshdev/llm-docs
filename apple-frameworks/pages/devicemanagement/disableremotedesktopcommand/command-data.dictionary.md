> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/disableremotedesktopcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/disableremotedesktopcommand/command-data.dictionary)

# DisableRemoteDesktopCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.14.4+

The command to disable Remote Desktop on a device.

## Declaration

```
object DisableRemoteDesktopCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `DisableRemoteDesktop`
