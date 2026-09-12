> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clearpasscodecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/clearpasscodecommand/command-data.dictionary)

# ClearPasscodeCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.1+ · watchOS 10.0+

The command to remove the passcode from a device.

## Declaration

```
object ClearPasscodeCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ClearPasscode`
- `UnlockToken` — `data` (required): The unlock token value that the device provides in its `TokenUpdateMessage` check-in message.
