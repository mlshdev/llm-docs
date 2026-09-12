> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationattributescommand](https://developer.apple.com/documentation/devicemanagement/managedapplicationattributescommand)

# ManagedApplicationAttributesCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to query attributes in managed apps on a device.

## Declaration

```
object ManagedApplicationAttributesCommand
```

## Properties

- `Command` — `ManagedApplicationAttributesCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ManagedApplicationAttributesCommand.Command](managedapplicationattributescommand/command-data.dictionary.md): The command to query attributes in managed apps on a device.

## See Also

### Commands and responses

- [ManagedApplicationAttributesResponse](managedapplicationattributesresponse.md): A response from the device after it processes the command to query attributes in managed apps on a device.
