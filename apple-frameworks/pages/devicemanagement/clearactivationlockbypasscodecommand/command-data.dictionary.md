> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/clearactivationlockbypasscodecommand/command-data.dictionary

# ClearActivationLockBypassCodeCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 7.1+ · macOS 10.15+ · visionOS 2.0+

The command to clear the Activation Lock bypass code on a device.

## Declaration

```
object ClearActivationLockBypassCodeCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ClearActivationLockBypassCode`
