> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/screensharingconnectiondisplayconfigurationobject

# ScreenSharingConnectionDisplayConfigurationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

The display configuration for this connection.

## Declaration

```
object ScreenSharingConnectionDisplayConfigurationObject
```

## Properties

- `DisplayType` — `string` (required): The type of display for the connection, which has these allowed values:

  - `Virtual1`: Create one virtual display.
  - `Virtual2`: Create two virtual displays.  
  **Allowed values:** `Virtual1`, `Virtual2`
