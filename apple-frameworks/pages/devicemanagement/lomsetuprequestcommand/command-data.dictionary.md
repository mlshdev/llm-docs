> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lomsetuprequestcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/lomsetuprequestcommand/command-data.dictionary)

# LOMSetupRequestCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

The command to get information from a device to set up lights-out management (LOM).

## Declaration

```
object LOMSetupRequestCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `LOMSetupRequest`
