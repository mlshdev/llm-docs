> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appsettingsallowed_binaryidentifierobject](https://developer.apple.com/documentation/devicemanagement/appsettingsallowed_binaryidentifierobject)

# AppSettingsAllowed_BinaryIdentifierObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

Dictionary containing one or more identifier fields to match a binary.

## Declaration

```
object AppSettingsAllowed_BinaryIdentifierObject
```

## Properties

- `CDHash` — `string`: The 40 character code signature code directory hash of the binary.
- `PathPrefix` — `string`: The file system path prefix to match binaries.
- `SigningID` — `string`: The code signature signing identifier of the binary.
- `SigningState` — `string`: The code signing state to match binaries.
  **Default:** `All`  
  **Allowed values:** `All`, `TestFlight`, `DeveloperID`, `Enterprise`, `AppStore`, `Apple`
- `TeamID` — `string`: The code signature team identifier of the binary. Use the value “\*APPLE\*” instead of an empty string for Apple binaries with an empty team identifier.
