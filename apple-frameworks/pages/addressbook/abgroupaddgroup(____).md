> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupaddgroup(_:_:)](https://developer.apple.com/documentation/addressbook/abgroupaddgroup(_:_:))

# ABGroupAddGroup(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds a subgroup to another group.

## Declaration

```swift
func ABGroupAddGroup(_ group: ABGroupRef!, _ groupToAdd: ABGroupRef!) -> Bool
```

## Parameters

- `group`: The group you wish to add a subgroup to. If `NULL`, this function raises an exception.
- `groupToAdd`: The subgroup you wish to add to `group`.

<a id="return-value"></a>

## Return Value

Returns `true` ifsuccessful. If the `group` argumentis already part of the receiver, this function does nothing andreturns `false`. If adding the group wouldcreate a recursion, this function also does nothing and returns `false`. Forexample, if the group “Animal Lovers” is in “Dog Lovers,“and you add “Dog Lovers” to “Animal Lovers,” that wouldcreate a recursion, which this function won’t allow.

## See Also

### Groups

- [ABCopyArrayOfAllGroups(\_:)](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddMember(\_:\_:\_:)](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers(\_:)](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups(\_:)](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier(\_:\_:\_:)](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups(\_:)](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate()](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

# ABGroupAddGroup (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds a subgroup to another group.

## Declaration

```objectivec
extern bool ABGroupAddGroup(ABGroupRef group, ABGroupRef groupToAdd);
```

## Parameters

- `group`: The group you wish to add a subgroup to. If `NULL`, this function raises an exception.
- `groupToAdd`: The subgroup you wish to add to `group`.

<a id="return-value"></a>

## Return Value

Returns `true` ifsuccessful. If the `group` argumentis already part of the receiver, this function does nothing andreturns `false`. If adding the group wouldcreate a recursion, this function also does nothing and returns `false`. Forexample, if the group “Animal Lovers” is in “Dog Lovers,“and you add “Dog Lovers” to “Animal Lovers,” that wouldcreate a recursion, which this function won’t allow.

## See Also

### Groups

- [ABCopyArrayOfAllGroups](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddMember](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).
