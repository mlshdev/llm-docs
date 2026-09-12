> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/orgdeviceactivitytype](https://developer.apple.com/documentation/applebusinessapi/orgdeviceactivitytype)

# OrgDeviceActivityType

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.4+

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
- `RELEASE_DEVICES`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - ASSIGN_DEVICES: Assign devices to a device management service
  - UNASSIGN_DEVICES: Unassign devices from a device management service
  - ASSIGN_DEVICES_WITH_MDM_MIGRATION_DEADLINE: Assign devices to a device management service and schedule a device management service migration by the given deadline.
  - UPDATE_MDM_MIGRATION_DEADLINE: Update the deadline for an in-progress device management service migration.
  - CANCEL_MDM_MIGRATION: Cancel an in-progress device management service migration.
  - RELEASE_DEVICES: Release devices from an organization

## See Also

### Type Aliases

- [AppleCareCoveragePaymentType](applecarecoveragepaymenttype.md): Strings that represent AppleCare coverage payment types.
- [AppleCareCoverageStatus](applecarecoveragestatus.md): Strings that represent AppleCare coverage status.
- [UserStatus](userstatus.md): Strings that represent user statuses.
- [UserPhoneNumberType](userphonenumbertype.md): Strings that represent phone number types.
- [UserGroupStatus](usergroupstatus.md): Strings that represent user group statuses.
- [UserGroupType](usergrouptype.md): Strings that represent user group types.
- [SupportedOS](supportedos.md): The supported operating systems for an app.
- [BlueprintStatus](blueprintstatus.md): The status of a Blueprint.
- [ConfigurationType](configurationtype.md): The type of Configuration profile.
- [ConfigurationPlatform](configurationplatform.md): The platform that a Configuration targets.
