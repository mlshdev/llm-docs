> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/audioaccessorysettingstemporarypairingobject](https://developer.apple.com/documentation/devicemanagement/audioaccessorysettingstemporarypairingobject)

# AudioAccessorySettingsTemporaryPairingObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A dictionary that describes audio accessory temporary pairing behavior. The device enables temporary pairing when this key is present and the `Disabled` key isn’t `false`. The device doesn’t synchronize pairing information with iCloud when temporary pairing is active.

## Declaration

```
object AudioAccessorySettingsTemporaryPairingObject
```

## Properties

- `Configuration` — `AudioAccessorySettingsTemporaryPairing_ConfigurationObject`: A dictionary providing configuration for temporary pairing. Required if `Disabled` isn’t present or is `false`.
- `Disabled` — `boolean`: If `true`, temporary pairing of audio accessories is disabled.
  **Default:** `false`

## Topics

### Objects

- [AudioAccessorySettingsTemporaryPairing_ConfigurationObject](audioaccessorysettingstemporarypairing_configurationobject.md): A dictionary providing configuration for temporary pairing. Required if `Disabled` isn’t present or is `false`.
