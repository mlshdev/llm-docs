> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationcommand/command-data.dictionary)

# ContentCachingInformationCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

The command to get the status of the content caches on a device.

## Declaration

```
object ContentCachingInformationCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ContentCachingInformation`
