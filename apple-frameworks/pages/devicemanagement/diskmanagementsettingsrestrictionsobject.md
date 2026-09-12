> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/diskmanagementsettingsrestrictionsobject](https://developer.apple.com/documentation/devicemanagement/diskmanagementsettingsrestrictionsobject)

# DiskManagementSettingsRestrictionsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 15.0+

The restrictions for the disk.

## Declaration

```
object DiskManagementSettingsRestrictionsObject
```

## Properties

- `ExternalStorage` — `string`: Specifies the mount policy for external storage:

  - `Allowed`: The system can mount external storage that’s read-write or read-only.
  - `ReadOnly`: The system can only mount read-only external storage. Note that external storage that’s read-write won’t be mounted read-only.
  - `Disallowed`: The system can’t mount any external storage.  
  **Allowed values:** `Allowed`, `ReadOnly`, `Disallowed`
- `NetworkStorage` — `string`: Specifies the mount policy for network storage:

  - `Allowed`: The system can mount network storage that’s read-write or read-only.
  - `ReadOnly`: The system can only mount read-only network storage. Note that network storage that’s read-write won’t be mounted read-only.
  - `Disallowed`: The system can’t mount any network storage.  
  **Allowed values:** `Allowed`, `ReadOnly`, `Disallowed`
