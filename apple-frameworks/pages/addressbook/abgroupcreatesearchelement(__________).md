> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroupcreatesearchelement(_:_:_:_:_:)](https://developer.apple.com/documentation/addressbook/abgroupcreatesearchelement(_:_:_:_:_:))

# ABGroupCreateSearchElement(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Creates an ABSearchElement object that specifies a queryfor ABGroup records.

## Declaration

```swift
func ABGroupCreateSearchElement(_ property: CFString!, _ label: CFString!, _ key: CFString!, _ value: CFTypeRef!, _ comparison: ABSearchComparison) -> Unmanaged<ABSearchElementRef>!
```

## Parameters

- `property`: The name of the property to search on. It cannot be `NULL`. For a full list of the properties, see `Group Properties` and Common Properties.
- `label`: The label name for a multi-value list. If `property` does not have multiple values, pass `NULL`. If `property` does have multiple values, pass `NULL` to search all the values. By default, ABGroup records don’t contain any multi-value list properties.
- `key`: The key name for a dictionary. If `property` is not a dictionary, pass `NULL`. If `property` is a dictionary, pass `NULL` to search all keys. By default, ABGroup records don’t contain any properties that are dictionaries.
- `value`: The value you are searching for. It cannot be `NULL`
- `comparison`: Specifies the type of comparison to perform, such as [kABEqual](kabequal.md) or [kABPrefixMatchCaseInsensitive](kabprefixmatchcaseinsensitive.md). For a full list, see [ABSearchComparison](absearchcomparison.md).

<a id="return-value"></a>

## Return Value

A search element objectthat specifies a query according to the above parameters. You areresponsible for releasing this object.

<a id="Discussion"></a>

## Discussion

Use the ABAddressBook [ABCopyArrayOfMatchingRecords(\_:\_:)](abcopyarrayofmatchingrecords%28____%29.md) functionto actually perform the query. Also, see `ABSearchElement C` formore functions that create compound queries.

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
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

# ABGroupCreateSearchElement (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Creates an ABSearchElement object that specifies a queryfor ABGroup records.

## Declaration

```objectivec
extern ABSearchElementRefABGroupCreateSearchElement(CFStringRef property, CFStringRef label, CFStringRef key, CFTypeRef value, ABSearchComparison comparison);
```

## Parameters

- `property`: The name of the property to search on. It cannot be `NULL`. For a full list of the properties, see `Group Properties` and Common Properties.
- `label`: The label name for a multi-value list. If `property` does not have multiple values, pass `NULL`. If `property` does have multiple values, pass `NULL` to search all the values. By default, ABGroup records don’t contain any multi-value list properties.
- `key`: The key name for a dictionary. If `property` is not a dictionary, pass `NULL`. If `property` is a dictionary, pass `NULL` to search all keys. By default, ABGroup records don’t contain any properties that are dictionaries.
- `value`: The value you are searching for. It cannot be `NULL`
- `comparison`: Specifies the type of comparison to perform, such as [kABEqual](kabequal.md) or [kABPrefixMatchCaseInsensitive](kabprefixmatchcaseinsensitive.md). For a full list, see [ABSearchComparison](absearchcomparison.md).

<a id="return-value"></a>

## Return Value

A search element objectthat specifies a query according to the above parameters. You areresponsible for releasing this object.

<a id="Discussion"></a>

## Discussion

Use the ABAddressBook [ABCopyArrayOfMatchingRecords](abcopyarrayofmatchingrecords%28____%29.md) functionto actually perform the query. Also, see `ABSearchElement C` formore functions that create compound queries.

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
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).
