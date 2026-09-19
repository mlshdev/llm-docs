> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/applyredemptioncodecommand/command-data.dictionary

# ApplyRedemptionCodeCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+

The command to complete the installation of an app using a redemption code.

## Declaration

```
object ApplyRedemptionCodeCommand.Command
```

## Properties

- `Identifier` — `string` (required): The bundle identifier of the app.
- `RedemptionCode` — `string` (required): The redemption code that applies to the app pending installation.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ApplyRedemptionCode`
