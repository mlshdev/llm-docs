> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/orgdeviceactivitytype](https://developer.apple.com/documentation/appleschoolmanagerapi/orgdeviceactivitytype)

# OrgDeviceActivityType

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Type  
**Availability:** Apple School Manager API 1.6+

Strings that represent organization device activities.

## Declaration

```
string OrgDeviceActivityType
```

## Possible Values

- `ASSIGN_DEVICES`:
- `UNASSIGN_DEVICES`:
- `ASSIGN_DEVICES_WITH_MDM_MIGRATION_DEADLINE`:
- `UPDATE_MDM_MIGRATION_DEADLINE`:
- `CANCEL_MDM_MIGRATION`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - ASSIGN_DEVICES:
  - UNASSIGN_DEVICES:
  - ASSIGN_DEVICES_WITH_MDM_MIGRATION_DEADLINE: Assign devices to a device management service and schedule a device management service migration by the given deadline.
  - UPDATE_MDM_MIGRATION_DEADLINE: Update the deadline for an in-progress device management service migration.
  - CANCEL_MDM_MIGRATION: Cancel an in-progress device management service migration.

## See Also

### Type Aliases

- [AppleCareCoveragePaymentType](applecarecoveragepaymenttype.md): Strings that represent AppleCare coverage payment types.
- [AppleCareCoverageStatus](applecarecoveragestatus.md): Strings that represent AppleCare coverage status.
