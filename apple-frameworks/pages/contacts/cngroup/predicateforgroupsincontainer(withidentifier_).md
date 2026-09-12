> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cngroup/predicateforgroupsincontainer(withidentifier:)](https://developer.apple.com/documentation/contacts/cngroup/predicateforgroupsincontainer(withidentifier:))

# predicateForGroupsInContainer(withIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find groups in the specified container.

## Declaration

```swift
class func predicateForGroupsInContainer(withIdentifier containerIdentifier: String) -> NSPredicate
```

## Parameters

- `containerIdentifier`: The container identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch groups from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Groups

- [predicateForGroups(withIdentifiers:)](predicateforgroups%28withidentifiers_%29.md): Returns a predicate to find groups with the specified identifiers.
- [predicateForSubgroupsInGroup(withIdentifier:)](predicateforsubgroupsingroup%28withidentifier_%29.md): Returns a predicate to find subgroups in the specified parent group.

# predicateForGroupsInContainerWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find groups in the specified container.

## Declaration

```objectivec
+ (NSPredicate *) predicateForGroupsInContainerWithIdentifier:(NSString *) containerIdentifier;
```

## Parameters

- `containerIdentifier`: The container identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch groups from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Groups

- [predicateForGroupsWithIdentifiers:](predicateforgroups%28withidentifiers_%29.md): Returns a predicate to find groups with the specified identifiers.
- [predicateForSubgroupsInGroupWithIdentifier:](predicateforsubgroupsingroup%28withidentifier_%29.md): Returns a predicate to find subgroups in the specified parent group.
