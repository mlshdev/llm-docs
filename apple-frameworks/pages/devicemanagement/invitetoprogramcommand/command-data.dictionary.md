> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/invitetoprogramcommand/command-data.dictionary

# InviteToProgramCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+

The command to invite a user to join the Volume Purchase Program (VPP).

## Declaration

```
object InviteToProgramCommand.Command
```

## Properties

- `InvitationURL` — `string` (required): The Volume Purchase Program (VPP) invitation URL.
- `ProgramID` — `string` (required): The program’s identifier, which can only be `com.apple.cloudvpp`.
  **Allowed values:** `com.apple.cloudvpp`
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `InviteToProgram`
