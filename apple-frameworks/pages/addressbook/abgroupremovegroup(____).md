> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupremovegroup(_:_:)](https://developer.apple.com/documentation/addressbook/abgroupremovegroup(_:_:))

# ABGroupRemoveGroup(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Removes a subgroup from a group.

## Declaration

```swift
func ABGroupRemoveGroup(_ group: ABGroupRef!, _ groupToRemove: ABGroupRef!) -> Bool
```

## Parameters

- `group`: If `NULL`, this function raises an exception.
- `groupToRemove`: The subgroup to be removed from `group`.

<a id="return-value"></a>

## Return Value

`true` ifsuccessful. If the `group` parameteris not a subgroup, this function does nothing and returns `false`.

## See Also

### Groups

- [ABCopyArrayOfAllGroups(\_:)](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup(\_:\_:)](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember(\_:\_:\_:)](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers(\_:)](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups(\_:)](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier(\_:\_:\_:)](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups(\_:)](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate()](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

# ABGroupRemoveGroup (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Removes a subgroup from a group.

## Declaration

```objectivec
extern bool ABGroupRemoveGroup(ABGroupRef group, ABGroupRef groupToRemove);
```

## Parameters

- `group`: If `NULL`, this function raises an exception.
- `groupToRemove`: The subgroup to be removed from `group`.

<a id="return-value"></a>

## Return Value

`true` ifsuccessful. If the `group` parameteris not a subgroup, this function does nothing and returns `false`.

## See Also

### Groups

- [ABCopyArrayOfAllGroups](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).
