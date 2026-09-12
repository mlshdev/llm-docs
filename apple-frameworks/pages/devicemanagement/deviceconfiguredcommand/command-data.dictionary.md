> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deviceconfiguredcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/deviceconfiguredcommand/command-data.dictionary)

# DeviceConfiguredCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 10.2+ · visionOS 2.0+

The command to inform the device that it can allow the user to continue in Setup Assistant.

## Declaration

```
object DeviceConfiguredCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `DeviceConfigured`
