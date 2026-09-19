> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/shutdowndevicecommand/command-data.dictionary

# ShutDownDeviceCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · macOS 10.13+

The command to remotely and immediately shut down a device.

## Declaration

```
object ShutDownDeviceCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ShutDownDevice`
