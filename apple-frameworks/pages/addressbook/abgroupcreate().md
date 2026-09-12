> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupcreate()](https://developer.apple.com/documentation/addressbook/abgroupcreate())

# ABGroupCreate() (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Returns a new ABGroup object.

> use \[\[CNMutableGroup alloc\] init\]

## Declaration

```swift
func ABGroupCreate() -> Unmanaged<ABRecord>!
```

```swift
func ABGroupCreate() -> Unmanaged<ABGroupRef>!
```

<a id="return-value"></a>

## Return Value

A newly created ABGroupobject. You are responsible for releasing this object.

## See Also

### Groups

- [ABCopyArrayOfAllGroups(\_:)](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup(\_:\_:)](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember(\_:\_:\_:)](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers(\_:)](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups(\_:)](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier(\_:\_:\_:)](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups(\_:)](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

# ABGroupCreate (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Returns a new ABGroup object.

> use \[\[CNMutableGroup alloc\] init\]

## Declaration

```objectivec
extern ABRecordRefABGroupCreate();
```

```objectivec
extern ABGroupRefABGroupCreate();
```

<a id="return-value"></a>

## Return Value

A newly created ABGroupobject. You are responsible for releasing this object.

## See Also

### Groups

- [ABCopyArrayOfAllGroups](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).
