> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/airplay/passwordsitem](https://developer.apple.com/documentation/devicemanagement/airplay/passwordsitem)

# AirPlay.PasswordsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.10+

The dictionary that defines passwords for AirPlay destinations.

## Declaration

```
object AirPlay.PasswordsItem
```

## Properties

- `DeviceID` — `string`: The device ID of the AirPlay destination; used in macOS.

  Deprecated in macOS 15 and later as tvOS 18 AirPlay destinations don’t support it; use `DeviceName` instead.

  Available: macOS 10.10+
  Deprecated: macOS 15+
- `DeviceName` — `string`: The name of the AirPlay destination.

  Available: iOS 7+ | iPadOS 7+ | macOS 15+
- `Password` — `string` (required): The password for the AirPlay destination.

## See Also

### Objects

- [AirPlay.AllowListItem](allowlistitem.md): Deprecated. The dictionary that defines allowed destinations.
