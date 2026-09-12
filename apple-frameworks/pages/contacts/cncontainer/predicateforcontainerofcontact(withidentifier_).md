> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer/predicateforcontainerofcontact(withidentifier:)](https://developer.apple.com/documentation/contacts/cncontainer/predicateforcontainerofcontact(withidentifier:))

# predicateForContainerOfContact(withIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the container of the specified contact.

## Declaration

```swift
class func predicateForContainerOfContact(withIdentifier contactIdentifier: String) -> NSPredicate
```

## Parameters

- `contactIdentifier`: The contact identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch a container from [CNContactStore](../cncontactstore.md).

<a id="Discussion"></a>

## Discussion

If the identifier is for a unified contact then this method returns an empty array. To fetch the containers of a unified contact, first fetch the linked contacts and then fetch the container of each linked contact.

## See Also

### Generating Search Predicates for Containers

- [predicateForContainers(withIdentifiers:)](predicateforcontainers%28withidentifiers_%29.md): Returns a predicate to find the containers with the specified identifiers.
- [predicateForContainerOfGroup(withIdentifier:)](predicateforcontainerofgroup%28withidentifier_%29.md): Returns a predicate to find the container of the specified group.

# predicateForContainerOfContactWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the container of the specified contact.

## Declaration

```objectivec
+ (NSPredicate *) predicateForContainerOfContactWithIdentifier:(NSString *) contactIdentifier;
```

## Parameters

- `contactIdentifier`: The contact identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch a container from [CNContactStore](../cncontactstore.md).

<a id="Discussion"></a>

## Discussion

If the identifier is for a unified contact then this method returns an empty array. To fetch the containers of a unified contact, first fetch the linked contacts and then fetch the container of each linked contact.

## See Also

### Generating Search Predicates for Containers

- [predicateForContainersWithIdentifiers:](predicateforcontainers%28withidentifiers_%29.md): Returns a predicate to find the containers with the specified identifiers.
- [predicateForContainerOfGroupWithIdentifier:](predicateforcontainerofgroup%28withidentifier_%29.md): Returns a predicate to find the container of the specified group.
