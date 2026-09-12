> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/audioaccessorysettingstemporarypairing_configuration_unpairingtimeobject](https://developer.apple.com/documentation/devicemanagement/audioaccessorysettingstemporarypairing_configuration_unpairingtimeobject)

# AudioAccessorySettingsTemporaryPairing_Configuration_UnpairingTimeObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A dictionary that describes when the device automatically unpairs temporarily paired audio accessories.

## Declaration

```
object AudioAccessorySettingsTemporaryPairing_Configuration_UnpairingTimeObject
```

## Properties

- `Hour` — `integer`: The local time hour (24-hour clock) when the device automatically unpairs temporarily paired audio accessories. Required when setting the `Policy` key to `Hour`.
  **Minimum:** `0`  
  **Maximum:** `23`
- `Policy` — `string` (required): A string that specifies the device’s unpairing policy.

  - `None`: The device doesn’t automatically unpair. Use this only with a return to service device that you erase and reenroll when assigning it from one user to another.
  - `Hour`: The device automatically unpairs temporarily paired audio accessories at the local time that the `Hour` key specifies.  
  **Allowed values:** `None`, `Hour`
