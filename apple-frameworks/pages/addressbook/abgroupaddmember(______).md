> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupaddmember(_:_:_:)](https://developer.apple.com/documentation/addressbook/abgroupaddmember(_:_:_:))

# ABGroupAddMember(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Adds a person to a group.

> use \[CNSaveRequest addMember:toGroup:\]

## Declaration

```swift
func ABGroupAddMember(_ group: ABRecord!, _ person: ABRecord!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

```swift
func ABGroupAddMember(_ group: ABGroupRef!, _ personToAdd: ABPersonRef!) -> Bool
```

## Parameters

- `group`: The group you wish to add `person` to.
- `person`: The person to add to `group`. If `person` is `NULL`, this function raises an exception.
- `personToAdd`: The person to add to `group`. If `person` is `NULL`, this function raises an exception.

<a id="return-value"></a>

## Return Value

`true` ifsuccessful, false otherwise. For example, if `person` isalready in `group`, this function doesnothing but returns `false`.

## See Also

### Groups

- [ABCopyArrayOfAllGroups(\_:)](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup(\_:\_:)](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupCopyArrayOfAllMembers(\_:)](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups(\_:)](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier(\_:\_:\_:)](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups(\_:)](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate()](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

# ABGroupAddMember (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Adds a person to a group.

> use \[CNSaveRequest addMember:toGroup:\]

## Declaration

```objectivec
extern bool ABGroupAddMember(ABRecordRef group, ABRecordRef person, CFErrorRef*error);
```

```objectivec
extern bool ABGroupAddMember(ABGroupRef group, ABPersonRef personToAdd);
```

## Parameters

- `group`: The group you wish to add `person` to.
- `personToAdd`: The person to add to `group`. If `person` is `NULL`, this function raises an exception.
- `person`: The person to add to `group`. If `person` is `NULL`, this function raises an exception.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`true` ifsuccessful, false otherwise. For example, if `person` isalready in `group`, this function doesnothing but returns `false`. On failure, this method returns `nil`.

## See Also

### Groups

- [ABCopyArrayOfAllGroups](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupCopyArrayOfAllMembers](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).
