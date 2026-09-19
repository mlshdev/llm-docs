> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/statussoftwareupdateinstallreasondictionaryobject

# StatusSoftwareUpdateInstallReasonDictionaryObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.4+ · visionOS 26.0+

Details about the reason for a pending software update.

## Declaration

```
object StatusSoftwareUpdateInstallReasonDictionaryObject
```

## Properties

- `declaration-id` — `string`: The identifier of the declaration that caused the software update to occur. This key is present only if the `reason` array contains the `declaration` value.
- `reason` — `[string]` (required): A list of reasons for the pending software update. An empty list indicates that no software update is pending.
  **Allowed values:** `system-settings`, `install-tonight`, `auto-update`, `notification`, `setup-assistant`, `command-line`, `mdm`, `declaration`
