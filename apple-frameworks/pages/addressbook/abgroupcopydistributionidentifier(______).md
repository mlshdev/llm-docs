> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupcopydistributionidentifier(_:_:_:)](https://developer.apple.com/documentation/addressbook/abgroupcopydistributionidentifier(_:_:_:))

# ABGroupCopyDistributionIdentifier(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the distribution identifier for the given propertyand person.

## Declaration

```swift
func ABGroupCopyDistributionIdentifier(_ group: ABGroupRef!, _ person: ABPersonRef!, _ property: CFString!) -> Unmanaged<CFString>!
```

## Parameters

- `group`: The group object that `person` belongs to.
- `person`: A person object whose distribution identifier you want to obtain.
- `property`: The name of a person’s multi-value list property whose distribution identifier you want to obtain.

<a id="return-value"></a>

## Return Value

The distribution identifierfor `person` and `property` ifit was set, otherwise returns the property’s primary identifier.If either `person` or `property` are `NULL`,this function returns `NULL`. Also,returns `NULL` if `property` isnot a multi-value list property. You are responsible for releasingthis object.

<a id="Discussion"></a>

## Discussion

Use the [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md) functionto set the distribution identifier for a person’s multi-valuelist property.

## See Also

### Groups

- [ABCopyArrayOfAllGroups(\_:)](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup(\_:\_:)](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember(\_:\_:\_:)](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers(\_:)](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups(\_:)](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyParentGroups(\_:)](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate()](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

# ABGroupCopyDistributionIdentifier (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the distribution identifier for the given propertyand person.

## Declaration

```objectivec
extern CFStringRefABGroupCopyDistributionIdentifier(ABGroupRef group, ABPersonRef person, CFStringRef property);
```

## Parameters

- `group`: The group object that `person` belongs to.
- `person`: A person object whose distribution identifier you want to obtain.
- `property`: The name of a person’s multi-value list property whose distribution identifier you want to obtain.

<a id="return-value"></a>

## Return Value

The distribution identifierfor `person` and `property` ifit was set, otherwise returns the property’s primary identifier.If either `person` or `property` are `NULL`,this function returns `NULL`. Also,returns `NULL` if `property` isnot a multi-value list property. You are responsible for releasingthis object.

<a id="Discussion"></a>

## Discussion

Use the [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md) functionto set the distribution identifier for a person’s multi-valuelist property.

## See Also

### Groups

- [ABCopyArrayOfAllGroups](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyParentGroups](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).
