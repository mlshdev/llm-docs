> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/apn/defaultsdata-data.dictionary/apnsitem

# APN.DefaultsData.ApnsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 4.0+ (deprecated in 7.0)

A dictionary that describes an APN configuration.

## Declaration

```
object APN.DefaultsData.ApnsItem
```

## Properties

- `apn` — `string` (required): The access point name.

  Deprecated: iOS 7+ | iPadOS 7+
- `password` — `data`: The password for the user. For obfuscation purposes, the system encodes the password. If missing, the device prompts for the password during profile installation.

  Deprecated: iOS 7+ | iPadOS 7+
- `proxy` — `string`: The IP address or URL of the APN proxy.

  Deprecated: iOS 7+ | iPadOS 7+
- `proxyPort` — `integer`: The port number of the APN proxy.

  Deprecated: iOS 7+ | iPadOS 7+
- `username` — `string`: The user name. If missing, the device prompts for it during profile installation.

  Deprecated: iOS 7+ | iPadOS 7+
