> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/contentcachinginformationcommand

# ContentCachingInformationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

The command to get the status of the content caches on a device.

## Declaration

```
object ContentCachingInformationCommand
```

## Properties

- `Command` — `ContentCachingInformationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ContentCachingInformationCommand.Command](contentcachinginformationcommand/command-data.dictionary.md): The command to get the status of the content caches on a device.

## See Also

### Commands and responses

- [ContentCachingInformationResponse](contentcachinginformationresponse.md): A response from the device after it processes the command to get the status of the content caches on a device.
