> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/groups(matching:)](https://developer.apple.com/documentation/contacts/cncontactstore/groups(matching:))

# groups(matching:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches all groups matching the specified predicate.

## Declaration

```swift
func groups(matching predicate: NSPredicate?) throws -> [CNGroup]
```

## Parameters

- `predicate`: The predicate to use to fetch the matching groups. Set predicate to `nil` to match all groups.

<a id="Return-Value"></a>

## Return Value

An array of [CNGroup](../cngroup.md) objects that match the predicate.

<a id="Discussion"></a>

## Discussion

This method returns an empty array when no matching groups are found. If an error occurs, this method returns `nil`. You should use only the predicates defined in [CNGroup](../cngroup.md) class predicates. Compound predicates are not supported. Contacts may be members of one or more groups, depending upon the account they come from.

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching groups and containers

- [defaultContainerIdentifier()](defaultcontaineridentifier%28%29.md): Returns the identifier of the default container.
- [containers(matching:)](containers%28matching_%29.md): Fetches all containers matching the specified predicate.

# groupsMatchingPredicate:error: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches all groups matching the specified predicate.

## Declaration

```objectivec
- (NSArray<CNGroup *> *) groupsMatchingPredicate:(NSPredicate *) predicate error:(NSError **) error;
```

## Parameters

- `predicate`: The predicate to use to fetch the matching groups. Set predicate to `nil` to match all groups.
- `error`: Error information, if an error occurred.

<a id="Return-Value"></a>

## Return Value

An array of [CNGroup](../cngroup.md) objects that match the predicate.

<a id="Discussion"></a>

## Discussion

This method returns an empty array when no matching groups are found. If an error occurs, this method returns `nil`. You should use only the predicates defined in [CNGroup](../cngroup.md) class predicates. Compound predicates are not supported. Contacts may be members of one or more groups, depending upon the account they come from.

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching groups and containers

- [defaultContainerIdentifier](defaultcontaineridentifier%28%29.md): Returns the identifier of the default container.
- [containersMatchingPredicate:error:](containers%28matching_%29.md): Fetches all containers matching the specified predicate.
