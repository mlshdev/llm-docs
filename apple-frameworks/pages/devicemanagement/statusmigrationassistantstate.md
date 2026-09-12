> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmigrationassistantstate](https://developer.apple.com/documentation/devicemanagement/statusmigrationassistantstate)

# StatusMigrationAssistantState

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.4+

A status item that shows the device’s current migration state.

## Declaration

```
object StatusMigrationAssistantState
```

## Properties

- `migration-assistant.state` — `string` (required): The current migration state of the system, which has the following possible values:

  - `none`: Migration hasn’t started yet or no migration has taken place.
  - `migrating`: Migration is in progress.
  - `completed`: Migration has completed successfully.
  - `failed`: Migration has failed.
  - `cancelled`: The user cancelled migration.
  - `unknown`: Migration status is unknown.  
  **Allowed values:** `waiting`, `migrating`, `completed`, `failed`, `cancelled`, `unknown`

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | macOS |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "migration-assistant": {
        "state": "completed"
    }
}
```

## See Also

### Migration assisstant items

- [StatusMigrationAssistantReport](statusmigrationassistantreport.md): The status item that reports the state of a completed migration.
