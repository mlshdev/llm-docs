> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/servicesbackgroundtaskslaunchditemobject](https://developer.apple.com/documentation/devicemanagement/servicesbackgroundtaskslaunchditemobject)

# ServicesBackgroundTasksLaunchdItemObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 15.0+

A dictionary of launchd configurations.

## Declaration

```
object ServicesBackgroundTasksLaunchdItemObject
```

## Properties

- `Context` — `string` (required): Indicates whether the device applies the launchd configuration file to the system daemon or system agent domain.
  **Allowed values:** `daemon`, `agent`
- `FileAssetReference` — `string` (required): Specifies the identifier of an asset declaration containing a reference to the launchd configuration file for the background task. The referenced data must be a property list file conforming to the launchd.plist format. The asset’s “ContentType” and “Hash-SHA-256” keys in the “Reference” key are required.
