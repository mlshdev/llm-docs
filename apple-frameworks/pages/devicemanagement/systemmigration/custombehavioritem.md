> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemmigration/custombehavioritem](https://developer.apple.com/documentation/devicemanagement/systemmigration/custombehavioritem)

# SystemMigration.CustomBehaviorItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12.4+

The custom behavior dictionary.

## Declaration

```
object SystemMigration.CustomBehaviorItem
```

## Properties

- `Context` — `string` (required): The context that custom paths apply to.
- `Paths` — `[SystemMigration.CustomBehaviorItem.PathsItem]` (required): The list of custom behavior path dictionaries.

## Topics

### Objects

- [SystemMigration.CustomBehaviorItem.PathsItem](custombehavioritem/pathsitem.md): The custom behavior path dictionary.
