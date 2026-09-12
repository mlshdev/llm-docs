> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupsetdistributionidentifier(_:_:_:_:)](https://developer.apple.com/documentation/addressbook/abgroupsetdistributionidentifier(_:_:_:_:))

# ABGroupSetDistributionIdentifier(\_:\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

## Declaration

```swift
func ABGroupSetDistributionIdentifier(_ group: ABGroupRef!, _ person: ABPersonRef!, _ property: CFString!, _ identifier: CFString!) -> Bool
```

## Parameters

- `group`: The group that `person` belongs to.
- `person`: The person whose distribution identifier for `property` you wish to change. If `NULL`, this function raises an exception.
- `property`: The multi-value list property whose distribution identifier you wish to change.
- `identifier`: The new distribution identifier, a label used by a multi-value list such as kABAddressHomeLabel for a kABAddressProperty. Pass `NULL` to reset the distribution identifier to its default, a multi-value list’s primary identifier.

<a id="return-value"></a>

## Return Value

`true` ifsuccessful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

The default distribution identifier is a multi-value list’sprimary identifier. Use this function if you need to change thedistribution identifier for a particular person. For example, ifthe default identifier is a person’s home email but you want touse John’s work email, invoke this function passing kABEmailWorkLabel asthe `identifier` parameter, kABEmailProperty asthe `property` parameter, and John’sperson object as the `person` parameter.

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
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.

# ABGroupSetDistributionIdentifier (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

## Declaration

```objectivec
extern bool ABGroupSetDistributionIdentifier(ABGroupRef group, ABPersonRef person, CFStringRef property, CFStringRef identifier);
```

## Parameters

- `group`: The group that `person` belongs to.
- `person`: The person whose distribution identifier for `property` you wish to change. If `NULL`, this function raises an exception.
- `property`: The multi-value list property whose distribution identifier you wish to change.
- `identifier`: The new distribution identifier, a label used by a multi-value list such as kABAddressHomeLabel for a kABAddressProperty. Pass `NULL` to reset the distribution identifier to its default, a multi-value list’s primary identifier.

<a id="return-value"></a>

## Return Value

`true` ifsuccessful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

The default distribution identifier is a multi-value list’sprimary identifier. Use this function if you need to change thedistribution identifier for a particular person. For example, ifthe default identifier is a person’s home email but you want touse John’s work email, invoke this function passing kABEmailWorkLabel asthe `identifier` parameter, kABEmailProperty asthe `property` parameter, and John’sperson object as the `person` parameter.

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
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
