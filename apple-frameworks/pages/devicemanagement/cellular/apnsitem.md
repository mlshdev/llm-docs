> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/cellular/apnsitem](https://developer.apple.com/documentation/devicemanagement/cellular/apnsitem)

# Cellular.APNsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · watchOS 3.2+

A dictionary that contains details about an access point name (APN) configuration.

## Declaration

```
object Cellular.APNsItem
```

## Properties

- `AllowedProtocolMask` — `integer`: The Internet Protocol versions that the system supports. Allowed values:

  - `1`: IPv4
  - `2`: IPv6
  - `3`: Both

  Available: iOS 10.3+ | iPadOS 10.3+ | watchOS 3.2+  
  **Allowed values:** `1`, `2`, `3`
- `AllowedProtocolMaskInDomesticRoaming` — `integer`: The Internet Protocol versions that the system supports while roaming. Allowed values:

  - `1`: IPv4
  - `2`: IPv6
  - `3`: Both

  Available: iOS 10.3+ | iPadOS 10.3+ | watchOS 3.2+  
  **Allowed values:** `1`, `2`, `3`
- `AllowedProtocolMaskInRoaming` — `integer`: The Internet Protocol versions that the system supports while roaming. Allowed values:

  - `1`: IPv4
  - `2`: IPv6
  - `3`: Both

  Available: iOS 10.3+ | iPadOS 10.3+ | watchOS 3.2+  
  **Allowed values:** `1`, `2`, `3`
- `AuthenticationType` — `string`: The authentication type for logging in.
  **Default:** `PAP`  
  **Allowed values:** `CHAP`, `PAP`
- `DefaultProtocolMask` — `integer`: The default Internet Protocol versions. Allowed values:

  - `1`: IPv4
  - `2`: IPv6
  - `3`: Both

  Available: iOS 10.3+ | iPadOS 10.3+ | watchOS 3.2+
  Deprecated: iOS 11+ | iPadOS 11+  
  **Allowed values:** `1`, `2`, `3`
- `EnableXLAT464` — `boolean`: If `true`, the system enables XLAT464.

  Available: iOS 16+ | iPadOS 16+ | watchOS 9+  
  **Default:** `false`
- `Name` — `string` (required): The name for this configuration.
- `Password` — `string`: The user’s password for the APN.
- `ProxyPort` — `integer`: The proxy server’s port number.
- `ProxyServer` — `string`: The proxy server’s address.
- `Username` — `string`: The user name for the APN.

## See Also

### Objects

- [Cellular.AttachAPN](attachapn-data.dictionary.md): A dictionary that contains details about an attach access point name (APN) configuration.
