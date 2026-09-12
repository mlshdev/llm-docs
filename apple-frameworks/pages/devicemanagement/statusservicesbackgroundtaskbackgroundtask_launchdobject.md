> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusservicesbackgroundtaskbackgroundtask_launchdobject](https://developer.apple.com/documentation/devicemanagement/statusservicesbackgroundtaskbackgroundtask_launchdobject)

# StatusServicesBackgroundTaskBackgroundTask_LaunchdObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

Details about a `launchd`-based background task, which is only present when the type is `daemon` or `agent`.

## Declaration

```
object StatusServicesBackgroundTaskBackgroundTask_LaunchdObject
```

## Properties

- `checksum` — `string` (required): The hash value of the `launchd` `plist` file.
- `device-management` — `StatusServicesBackgroundTaskBackgroundTask_Launchd_DeviceManagementObject`: A dictionary that indicates a [ServicesBackgroundTasks](servicesbackgroundtasks.md) configuration created this background task. The dictionary contains properties that identify the configuration and the declaration asset that provided the launchd plist for the task.

  Available: macOS 15+
- `label` — `string` (required): The label of the `launchd`-based background task.
- `program` — `string` (required): The program that the `launchd` `plist` file specifies.
- `program-arguments` — `[string]`: The program arguments that the `launchd` `plist` file specifies.

## Topics

### Objects

- [StatusServicesBackgroundTaskBackgroundTask_Launchd_DeviceManagementObject](statusservicesbackgroundtaskbackgroundtask_launchd_devicemanagementobject.md): A dictionary that indicates a [ServicesBackgroundTasks](servicesbackgroundtasks.md) configuration created this background task. The dictionary contains properties that identify the configuration and the declaration asset that provided the launchd plist for the task.
