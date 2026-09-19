> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/setbootstraptokenrequest

# SetBootstrapTokenRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 10.15+ · visionOS 26.0+

The set bootstrap token request details.

## Declaration

```
object SetBootstrapTokenRequest
```

## Properties

- `AwaitingConfiguration` — `boolean`: If `true`, the device is awaiting a [Device Configured](device-configured-command.md) command before proceeding through Setup Assistant.
  **Default:** `false`
- `BootstrapToken` — `data`: The device’s bootstrap token data. If this field is missing or zero length, the server needs to remove the bootstrap token for this device.
- `MessageType` — `string` (required): The message type, which requires a value of `SetBootstrapToken`.
  **Allowed values:** `SetBootstrapToken`
