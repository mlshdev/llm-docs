> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/triggerenhancedlogcollectioncommand](https://developer.apple.com/documentation/devicemanagement/triggerenhancedlogcollectioncommand)

# TriggerEnhancedLogCollectionCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The command to trigger enhanced log collection on the device.

## Declaration

```
object TriggerEnhancedLogCollectionCommand
```

## Properties

- `Command` — `TriggerEnhancedLogCollectionCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [TriggerEnhancedLogCollectionCommand.Command](triggerenhancedlogcollectioncommand/command-data.dictionary.md): The command to trigger enhanced log collection on the device.

## See Also

### Commands and responses

- [TriggerEnhancedLogCollectionResponse](triggerenhancedlogcollectionresponse.md): A response from the device after it processes the command to trigger enhanced log collection on the device.
