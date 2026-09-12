> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cngroup/predicateforsubgroupsingroup(withidentifier:)](https://developer.apple.com/documentation/contacts/cngroup/predicateforsubgroupsingroup(withidentifier:))

# predicateForSubgroupsInGroup(withIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Returns a predicate to find subgroups in the specified parent group.

## Declaration

```swift
class func predicateForSubgroupsInGroup(withIdentifier parentGroupIdentifier: String) -> NSPredicate
```

## Parameters

- `parentGroupIdentifier`: The parent group to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch subgroup information from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Groups

- [predicateForGroups(withIdentifiers:)](predicateforgroups%28withidentifiers_%29.md): Returns a predicate to find groups with the specified identifiers.
- [predicateForGroupsInContainer(withIdentifier:)](predicateforgroupsincontainer%28withidentifier_%29.md): Returns a predicate to find groups in the specified container.

# predicateForSubgroupsInGroupWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Returns a predicate to find subgroups in the specified parent group.

## Declaration

```objectivec
+ (NSPredicate *) predicateForSubgroupsInGroupWithIdentifier:(NSString *) parentGroupIdentifier;
```

## Parameters

- `parentGroupIdentifier`: The parent group to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch subgroup information from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Groups

- [predicateForGroupsWithIdentifiers:](predicateforgroups%28withidentifiers_%29.md): Returns a predicate to find groups with the specified identifiers.
- [predicateForGroupsInContainerWithIdentifier:](predicateforgroupsincontainer%28withidentifier_%29.md): Returns a predicate to find groups in the specified container.
