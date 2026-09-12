> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictionscommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/restrictionscommand/command-data.dictionary)

# RestrictionsCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to get a list of restrictions on the device.

## Declaration

```
object RestrictionsCommand.Command
```

## Properties

- `ProfileRestrictions` — `boolean`: If `true`, the device reports restrictions from each profile.
  **Default:** `false`
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `Restrictions`
