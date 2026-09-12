> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/erasedevicecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/erasedevicecommand/command-data.dictionary)

# EraseDeviceCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to remotely and immediately erase a device.

## Declaration

```
object EraseDeviceCommand.Command
```

## Properties

- `DisallowProximitySetup` — `boolean`: If `true`, disable Proximity Setup on the next reboot and skip the pane in Setup Assistant. Prior to iOS 14, don’t use this option with any other option.

  Available: iOS 11.3+ | iPadOS 11.3+  
  **Default:** `false`
- `ObliterationBehavior` — `string`: This key defines the fallback behavior for erasing a device.

  In macOS 12 and later, this command uses Erase All Content and Settings (EACS) on Mac computers with the Apple M1 chip or the Apple T2 Security Chip. On those devices, if EACS can’t run, the device can use obliteration (macOS 11.x behavior). This key has no effect on machines prior to the T2 chip. For a list of supported macs, see [Mac models with the Apple T2 Security Chip](https://support.apple.com/en-us/HT208862).

  Upon receiving this command, the device performs preflight checks to determine if the device is in a state that allows EACS. The `status` of the [EraseDeviceResponse](../erasedeviceresponse.md) is either `Acknowledged` or `Error`.

  The following values define the device’s fallback behavior:

  - `DoNotObliterate`: If EACS preflight fails, the device responds to the server with an `Error` status and doesn’t attempt to erase itself. If EACS preflight succeeds, but EACS fails, the device doesn’t attempt to erase itself.
  - `ObliterateWithWarning`: If EACS preflight fails, the device responds with an `Acknowledged` status and then attempts to erase itself. If EACS preflight succeeds, but EACS fails, the device attempts to erase itself.
  - `Always`: The system doesn’t attempt EACS. T2 and later devices always obliterate.
  - `Default`: If EACS preflight fails, the device responds to the server with an `Error` status and then attempts to erase itself. If EACS preflight succeeds, but EACS fails, the device attempts to erase itself.

  Available: macOS 12+  
  **Allowed values:** `Default`, `DoNotObliterate`, `ObliterateWithWarning`, `Always`
- `PIN` — `string`: The six-character PIN for Find My.

  Available: macOS 10.8+
- `PreserveDataPlan` — `boolean`: If `true`, preserve the data plan on an iPhone or iPad with eSIM functionality, if one exists.

  Available: iOS 11+ | iPadOS 11+ | watchOS 10+  
  **Default:** `false`
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `EraseDevice`
- `ReturnToService` — `EraseDeviceCommand.Command.ReturnToService`: The configuration settings for return to service.

  Available: iOS 17+ | iPadOS 17+ | tvOS 18+ | visionOS 26+

## Topics

### Objects

- [EraseDeviceCommand.Command.ReturnToService](command-data.dictionary/returntoservice-data.dictionary.md): The configuration settings for return to service.
