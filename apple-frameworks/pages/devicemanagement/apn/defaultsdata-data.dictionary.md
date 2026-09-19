> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/apn/defaultsdata-data.dictionary

# APN.DefaultsData

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 4.0+ (deprecated in 7.0)

An array of access point name dictionaries.

## Declaration

```
object APN.DefaultsData
```

## Properties

- `apns` — `[APN.DefaultsData.ApnsItem]` (required): An array of APN dictionaries.

  Deprecated: iOS 7+ | iPadOS 7+

## Topics

### Objects

- [APN.DefaultsData.ApnsItem](defaultsdata-data.dictionary/apnsitem.md): Deprecated. A dictionary that describes an APN configuration.
