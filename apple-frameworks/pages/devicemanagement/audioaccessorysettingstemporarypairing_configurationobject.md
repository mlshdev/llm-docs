> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/audioaccessorysettingstemporarypairing_configurationobject

# AudioAccessorySettingsTemporaryPairing_ConfigurationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A dictionary providing configuration for temporary pairing. Required if `Disabled` isn’t present or is `false`.

## Declaration

```
object AudioAccessorySettingsTemporaryPairing_ConfigurationObject
```

## Properties

- `UnpairingTime` — `AudioAccessorySettingsTemporaryPairing_Configuration_UnpairingTimeObject` (required): A dictionary that describes when the device automatically unpairs temporarily paired audio accessories.

## Topics

### Objects

- [AudioAccessorySettingsTemporaryPairing_Configuration_UnpairingTimeObject](audioaccessorysettingstemporarypairing_configuration_unpairingtimeobject.md): A dictionary that describes when the device automatically unpairs temporarily paired audio accessories.
