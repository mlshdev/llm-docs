> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/applyredemptioncodecommand](https://developer.apple.com/documentation/devicemanagement/applyredemptioncodecommand)

# ApplyRedemptionCodeCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+

The command to complete the installation of an app using a redemption code.

## Declaration

```
object ApplyRedemptionCodeCommand
```

## Properties

- `Command` — `ApplyRedemptionCodeCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ApplyRedemptionCodeCommand.Command](applyredemptioncodecommand/command-data.dictionary.md): The command to complete the installation of an app using a redemption code.

## See Also

### Commands and responses

- [ApplyRedemptionCodeResponse](applyredemptioncoderesponse.md): A response from the device after it processes the command to complete the installation of an app using a redemption code.
