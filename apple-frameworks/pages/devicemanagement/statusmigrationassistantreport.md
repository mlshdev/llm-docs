> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmigrationassistantreport](https://developer.apple.com/documentation/devicemanagement/statusmigrationassistantreport)

# StatusMigrationAssistantReport

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.4+

The status item that reports the state of a completed migration.

## Declaration

```
object StatusMigrationAssistantReport
```

## Properties

- `migration-assistant.report` — `StatusMigrationAssistantReportMigrationAssistantReportObject` (required): The Migration Assistant migration status.

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
        "report": {
            "completed-data-size": 53687091200,
            "completed-file-count": 125000,
            "completion-time": "2025-05-15T14:30:00Z",
            "source-user": "user",
            "start-time": "2025-05-15T12:00:00Z",
            "target-user": "user",
            "total-data-size": 53687091200,
            "total-file-count": 125000
        }
    }
}
```

## Topics

### Objects

- [StatusMigrationAssistantReportMigrationAssistantReportObject](statusmigrationassistantreportmigrationassistantreportobject.md): The Migration Assistant migration status.

## See Also

### Migration assisstant items

- [StatusMigrationAssistantState](statusmigrationassistantstate.md): A status item that shows the device’s current migration state.
