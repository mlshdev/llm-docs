> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/defaultcontaineridentifier()](https://developer.apple.com/documentation/contacts/cncontactstore/defaultcontaineridentifier())

# defaultContainerIdentifier() (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the identifier of the default container.

## Declaration

```swift
func defaultContainerIdentifier() -> String
```

<a id="Return-Value"></a>

## Return Value

The identifier of the default container.

<a id="Discussion"></a>

## Discussion

This identifier can be used to fetch a default container. A default container is where the user wants new contacts to be added implicitly.

## See Also

### Fetching groups and containers

- [groups(matching:)](groups%28matching_%29.md): Fetches all groups matching the specified predicate.
- [containers(matching:)](containers%28matching_%29.md): Fetches all containers matching the specified predicate.

# defaultContainerIdentifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the identifier of the default container.

## Declaration

```objectivec
- (NSString *) defaultContainerIdentifier;
```

<a id="Return-Value"></a>

## Return Value

The identifier of the default container.

<a id="Discussion"></a>

## Discussion

This identifier can be used to fetch a default container. A default container is where the user wants new contacts to be added implicitly.

## See Also

### Fetching groups and containers

- [groupsMatchingPredicate:error:](groups%28matching_%29.md): Fetches all groups matching the specified predicate.
- [containersMatchingPredicate:error:](containers%28matching_%29.md): Fetches all containers matching the specified predicate.
