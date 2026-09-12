> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/containers(matching:)](https://developer.apple.com/documentation/contacts/cncontactstore/containers(matching:))

# containers(matching:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches all containers matching the specified predicate.

## Declaration

```swift
func containers(matching predicate: NSPredicate?) throws -> [CNContainer]
```

## Parameters

- `predicate`: The predicate to use to fetch matching containers. Set this property to `nil` to match all containers.

<a id="Return-Value"></a>

## Return Value

An array of [CNContainer](../cncontainer.md) objects that match the predicate.

<a id="Discussion"></a>

## Discussion

A container holds a collection of contacts, and a contact can be in only one container. CardDAV accounts usually have only one container of contacts. Exchange accounts may have multiple containers, where each container represents an Exchange folder.

This method returns an empty array when no matching container is found. In case of an error this method returns `nil`. You should use only the predicates defined [CNContainer](../cncontainer.md) class. Compound predicates are not supported.

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching groups and containers

- [defaultContainerIdentifier()](defaultcontaineridentifier%28%29.md): Returns the identifier of the default container.
- [groups(matching:)](groups%28matching_%29.md): Fetches all groups matching the specified predicate.

# containersMatchingPredicate:error: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches all containers matching the specified predicate.

## Declaration

```objectivec
- (NSArray<CNContainer *> *) containersMatchingPredicate:(NSPredicate *) predicate error:(NSError **) error;
```

## Parameters

- `predicate`: The predicate to use to fetch matching containers. Set this property to `nil` to match all containers.
- `error`: Error information, if an error occurred.

<a id="Return-Value"></a>

## Return Value

An array of [CNContainer](../cncontainer.md) objects that match the predicate.

<a id="Discussion"></a>

## Discussion

A container holds a collection of contacts, and a contact can be in only one container. CardDAV accounts usually have only one container of contacts. Exchange accounts may have multiple containers, where each container represents an Exchange folder.

This method returns an empty array when no matching container is found. In case of an error this method returns `nil`. You should use only the predicates defined [CNContainer](../cncontainer.md) class. Compound predicates are not supported.

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching groups and containers

- [defaultContainerIdentifier](defaultcontaineridentifier%28%29.md): Returns the identifier of the default container.
- [groupsMatchingPredicate:error:](groups%28matching_%29.md): Fetches all groups matching the specified predicate.
