> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/logoutusercommand/command-data.dictionary

# LogOutUserCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to force the current user to log out of a device.

## Declaration

```
object LogOutUserCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `LogOutUser`
