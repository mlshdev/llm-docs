> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventconfigsettingscreated

# AuditEventConfigSettingsCreated

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The data structure that represents the event data for a config settings created audit event.

## Declaration

```
object AuditEventConfigSettingsCreated
```

## Properties

- `configType` — `string`: The type of the Configuration (e.g. “WiFi”).
- `configId` — `string`: The unique identifier of an instance of an admin-created Configuration.
- `configVersion` — `string`: The version of the Configuration.
