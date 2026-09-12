> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/enablelostmodecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/enablelostmodecommand/command-data.dictionary)

# EnableLostModeCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.

## Declaration

```
object EnableLostModeCommand.Command
```

## Properties

- `Footnote` — `string`: If present, the device displays this text at the bottom of the Lock Screen.
- `Message` — `string`: If present, the device displays this text on the Lock Screen. You must provide this value if you don’t provide a value for `PhoneNumber`.
- `PhoneNumber` — `string`: If present, the device displays this phone number on the Lock Screen. You must provide this value if you don’t provide a value for `Message`.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `EnableLostMode`
