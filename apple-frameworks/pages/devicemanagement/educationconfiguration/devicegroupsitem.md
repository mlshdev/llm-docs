> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/educationconfiguration/devicegroupsitem](https://developer.apple.com/documentation/devicemanagement/educationconfiguration/devicegroupsitem)

# EducationConfiguration.DeviceGroupsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.14+

A device group in the organization.

## Declaration

```
object EducationConfiguration.DeviceGroupsItem
```

## Properties

- `Identifier` — `string` (required): The unique identifier for the device group in the organization.
- `Name` — `string` (required): The name of the device group, which must be unique in the organization.
- `SerialNumbers` — `[string]` (required): The serial numbers of the devices in the group.

## See Also

### Objects

- [EducationConfiguration.DepartmentsItem](departmentsitem.md): A department in the organization.
- [EducationConfiguration.GroupsItem](groupsitem.md): An array of dictionaries defining groups.
- [EducationConfiguration.UsersItem](usersitem.md): A user in the organization.
