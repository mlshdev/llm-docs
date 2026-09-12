> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer/predicateforcontainers(withidentifiers:)](https://developer.apple.com/documentation/contacts/cncontainer/predicateforcontainers(withidentifiers:))

# predicateForContainers(withIdentifiers:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the containers with the specified identifiers.

## Declaration

```swift
class func predicateForContainers(withIdentifiers identifiers: [String]) -> NSPredicate
```

## Parameters

- `identifiers`: The container identifiers to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch containers from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Containers

- [predicateForContainerOfContact(withIdentifier:)](predicateforcontainerofcontact%28withidentifier_%29.md): Returns a predicate to find the container of the specified contact.
- [predicateForContainerOfGroup(withIdentifier:)](predicateforcontainerofgroup%28withidentifier_%29.md): Returns a predicate to find the container of the specified group.

# predicateForContainersWithIdentifiers: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the containers with the specified identifiers.

## Declaration

```objectivec
+ (NSPredicate *) predicateForContainersWithIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `identifiers`: The container identifiers to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch containers from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Containers

- [predicateForContainerOfContactWithIdentifier:](predicateforcontainerofcontact%28withidentifier_%29.md): Returns a predicate to find the container of the specified contact.
- [predicateForContainerOfGroupWithIdentifier:](predicateforcontainerofgroup%28withidentifier_%29.md): Returns a predicate to find the container of the specified group.
