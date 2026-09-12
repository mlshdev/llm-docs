> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/userconfiguredcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/userconfiguredcommand/command-data.dictionary)

# UserConfiguredCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The command to inform the device that it can continue past Setup Assistant and finish login.

## Declaration

```
object UserConfiguredCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `UserConfigured`
