> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventappleservicessettingsupdated

# AuditEventAppleServicesSettingsUpdated

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.6+

The data structure that represents the event data for an Apple services settings updated audit event.

## Declaration

```
object AuditEventAppleServicesSettingsUpdated
```

## Properties

- `settingsEnabled` — `[string]`: The list of Apple services settings that were enabled.
- `settingsDisabled` — `[string]`: The list of Apple services settings that were disabled.
