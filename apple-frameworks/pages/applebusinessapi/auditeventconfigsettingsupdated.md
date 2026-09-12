> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditeventconfigsettingsupdated](https://developer.apple.com/documentation/applebusinessapi/auditeventconfigsettingsupdated)

# AuditEventConfigSettingsUpdated

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data structure that represents the event data for a config settings updated audit event.

## Declaration

```
object AuditEventConfigSettingsUpdated
```

## Properties

- `configType` — `string`: The type of the Configuration (e.g. “WiFi”).
- `configId` — `string`: The unique identifier of an instance of an admin-created Configuration.
- `configVersion` — `string`: The version of the Configuration.
