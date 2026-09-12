> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/removemediacommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/removemediacommand/command-data.dictionary)

# RemoveMediaCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

The command to remove a previously installed book from a device.

## Declaration

```
object RemoveMediaCommand.Command
```

## Properties

- `iTunesStoreID` — `string`: The book’s iTunes Store identifier.
- `MediaType` — `string` (required): The media type, which can only be `Book`.
  **Allowed values:** `Book`
- `PersistentID` — `string`: The book’s persistent identifier in reverse-DNS form; for example, `com.acme.manuals.training`.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `RemoveMedia`
