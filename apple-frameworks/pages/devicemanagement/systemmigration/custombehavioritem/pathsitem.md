> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemmigration/custombehavioritem/pathsitem](https://developer.apple.com/documentation/devicemanagement/systemmigration/custombehavioritem/pathsitem)

# SystemMigration.CustomBehaviorItem.PathsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12.4+

The custom behavior path dictionary.

## Declaration

```
object SystemMigration.CustomBehaviorItem.PathsItem
```

## Properties

- `SourcePath` — `string` (required): The path to the migrating file or directory on the source system.
- `SourcePathInUserHome` — `boolean` (required): If `true`, the source path is located within a user home directory.
- `TargetPath` — `string` (required): The path to the destination file or directory on the target system.
- `TargetPathInUserHome` — `boolean` (required): If `true`, the target path is located within a user home directory.
