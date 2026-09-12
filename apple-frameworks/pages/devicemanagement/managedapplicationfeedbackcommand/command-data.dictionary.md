> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationfeedbackcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/managedapplicationfeedbackcommand/command-data.dictionary)

# ManagedApplicationFeedbackCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+

The command to get app feedback from a managed app on the device.

## Declaration

```
object ManagedApplicationFeedbackCommand.Command
```

## Properties

- `DeleteFeedback` — `boolean`: If `true`, delete the app’s feedback dictionary after the server reads it. Apps that are managed by Declarative Device Management are ignored.
  **Default:** `false`
- `Identifiers` — `[string]` (required): The bundle identifiers of the managed apps.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ManagedApplicationFeedback`
