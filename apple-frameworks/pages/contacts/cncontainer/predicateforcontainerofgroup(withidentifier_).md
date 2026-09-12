> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer/predicateforcontainerofgroup(withidentifier:)](https://developer.apple.com/documentation/contacts/cncontainer/predicateforcontainerofgroup(withidentifier:))

# predicateForContainerOfGroup(withIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the container of the specified group.

## Declaration

```swift
class func predicateForContainerOfGroup(withIdentifier groupIdentifier: String) -> NSPredicate
```

## Parameters

- `groupIdentifier`: The group identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch a container from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Containers

- [predicateForContainerOfContact(withIdentifier:)](predicateforcontainerofcontact%28withidentifier_%29.md): Returns a predicate to find the container of the specified contact.
- [predicateForContainers(withIdentifiers:)](predicateforcontainers%28withidentifiers_%29.md): Returns a predicate to find the containers with the specified identifiers.

# predicateForContainerOfGroupWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the container of the specified group.

## Declaration

```objectivec
+ (NSPredicate *) predicateForContainerOfGroupWithIdentifier:(NSString *) groupIdentifier;
```

## Parameters

- `groupIdentifier`: The group identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch a container from [CNContactStore](../cncontactstore.md).

## See Also

### Generating Search Predicates for Containers

- [predicateForContainerOfContactWithIdentifier:](predicateforcontainerofcontact%28withidentifier_%29.md): Returns a predicate to find the container of the specified contact.
- [predicateForContainersWithIdentifiers:](predicateforcontainers%28withidentifiers_%29.md): Returns a predicate to find the containers with the specified identifiers.
