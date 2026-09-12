> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/cellular/attachapn-data.dictionary](https://developer.apple.com/documentation/devicemanagement/cellular/attachapn-data.dictionary)

# Cellular.AttachAPN

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · watchOS 3.2+

A dictionary that contains details about an attach access point name (APN) configuration.

## Declaration

```
object Cellular.AttachAPN
```

## Properties

- `AllowedProtocolMask` — `integer`: The Internet Protocol versions that the system supports. Allowed values:

  - `1`: IPv4
  - `2`: IPv6
  - `3`: Both

  Available: iOS 10.3+ | iPadOS 10.3+ | watchOS 3.2+  
  **Allowed values:** `1`, `2`, `3`
- `AuthenticationType` — `string`: The authentication type.
  **Default:** `PAP`  
  **Allowed values:** `CHAP`, `PAP`
- `Name` — `string` (required): The name for this configuration.
- `Password` — `string`: The password for the user.
- `Username` — `string`: The user name.

## See Also

### Objects

- [Cellular.APNsItem](apnsitem.md): A dictionary that contains details about an access point name (APN) configuration.
