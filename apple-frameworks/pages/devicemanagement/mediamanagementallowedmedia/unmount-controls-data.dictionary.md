> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mediamanagementallowedmedia/unmount-controls-data.dictionary](https://developer.apple.com/documentation/devicemanagement/mediamanagementallowedmedia/unmount-controls-data.dictionary)

# MediaManagementAllowedMedia.Unmount-controls

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+ (deprecated in 11.0)

A dictionary to control volume unmounting.

## Declaration

```
object MediaManagementAllowedMedia.Unmount-controls
```

## Properties

- `all-media` — `string`: Unused; set to an empty string.

  Deprecated: macOS 11+
- `bd` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `blankbd` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `blankcd` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `blankdvd` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `cd` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `disk-image` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `dvd` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `dvdram` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `harddisk-external` — `[string]`: A string or an array of media action strings. The hard disk-external category includes internally installed SD cards and USB flash drives.

  This key is the default for media types that don’t fall into other categories.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `harddisk-internal` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`
- `networkdisk` — `[string]`: A media action string or an array of media action strings.

  Deprecated: macOS 11+  
  **Allowed values:** `authenticate`, `read-only`, `deny`, `eject`

## See Also

### Objects

- [MediaManagementAllowedMedia.Logout-eject](logout-eject-data.dictionary.md): Deprecated. A dictionary of volumes to eject when the user logs out.
- [MediaManagementAllowedMedia.Mount-controls](mount-controls-data.dictionary.md): Deprecated. A dictionary of volumes to control volume mounting.
