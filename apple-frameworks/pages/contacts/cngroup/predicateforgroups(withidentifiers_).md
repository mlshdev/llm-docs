> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cngroup/predicateforgroups(withidentifiers:)](https://developer.apple.com/documentation/contacts/cngroup/predicateforgroups(withidentifiers:))

# predicateForGroups(withIdentifiers:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find groups with the specified identifiers.

## Declaration

```swift
class func predicateForGroups(withIdentifiers identifiers: [String]) -> NSPredicate
```

## Parameters

- `identifiers`: The group identifiers to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch groups from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Groups

- [predicateForGroupsInContainer(withIdentifier:)](predicateforgroupsincontainer%28withidentifier_%29.md): Returns a predicate to find groups in the specified container.
- [predicateForSubgroupsInGroup(withIdentifier:)](predicateforsubgroupsingroup%28withidentifier_%29.md): Returns a predicate to find subgroups in the specified parent group.

# predicateForGroupsWithIdentifiers: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find groups with the specified identifiers.

## Declaration

```objectivec
+ (NSPredicate *) predicateForGroupsWithIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `identifiers`: The group identifiers to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch groups from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Groups

- [predicateForGroupsInContainerWithIdentifier:](predicateforgroupsincontainer%28withidentifier_%29.md): Returns a predicate to find groups in the specified container.
- [predicateForSubgroupsInGroupWithIdentifier:](predicateforsubgroupsingroup%28withidentifier_%29.md): Returns a predicate to find subgroups in the specified parent group.
