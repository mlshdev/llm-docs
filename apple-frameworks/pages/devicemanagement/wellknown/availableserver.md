> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/wellknown/availableserver

# WellKnown.AvailableServer

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The configuration details for an authentication server.

## Declaration

```
object WellKnown.AvailableServer
```

## Properties

- `BaseURL` — `string` (required): The URL where the service resides. This is the base path for subsequent requests.
- `Version` — `string` (required): The server’s version string.
  **Allowed values:** `mdm-byod`, `mdm-adde`
