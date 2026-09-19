> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/educationconfiguration/departmentsitem

# EducationConfiguration.DepartmentsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.14+

A department in the organization.

## Declaration

```
object EducationConfiguration.DepartmentsItem
```

## Properties

- `GroupBeaconIDs` — `[integer]` (required): The group beacon identifiers that are members of this department.
- `Name` — `string` (required): The display name of the department.

## See Also

### Objects

- [EducationConfiguration.DeviceGroupsItem](devicegroupsitem.md): A device group in the organization.
- [EducationConfiguration.GroupsItem](groupsitem.md): An array of dictionaries defining groups.
- [EducationConfiguration.UsersItem](usersitem.md): A user in the organization.
