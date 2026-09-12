> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clspredicatekeypath](https://developer.apple.com/documentation/classkit/clspredicatekeypath)

# CLSPredicateKeyPath (Swift)

**Framework:** ClassKit  
**Kind:** Structure  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The set of possible key paths you use to search for contexts.

## Declaration

```swift
struct CLSPredicateKeyPath
```

<a id="Discussion"></a>

## Discussion

Use these predicate key paths when constructing a predicate to send to the [contexts(matching:completion:)](clsdatastore/contexts%28matching_completion_%29.md) method.

## Topics

### Predicate key paths

- [dateCreated](clspredicatekeypath/datecreated.md): The date on which the context was created.
- [identifier](clspredicatekeypath/identifier.md): The context’s identifier.
- [parent](clspredicatekeypath/parent.md): The context’s direct ancestor in the context hierarchy.
- [title](clspredicatekeypath/title.md): The human readable name of the context.
- [topic](clspredicatekeypath/topic.md): The context’s topic.
- [universalLinkURL](clspredicatekeypath/universallinkurl.md): The context’s universal URL link.

### Initializing a predicate key path

- [init(\_:)](clspredicatekeypath/init%28__%29.md): Initializes a predicate key path.
- [init(rawValue:)](clspredicatekeypath/init%28rawvalue_%29.md): Initializes a predicate key path with the given value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Finding contexts that match criteria

- [contexts(matchingIdentifierPath:completion:)](clsdatastore/contexts%28matchingidentifierpath_completion_%29.md): Fetches all the contexts along a given identifier path.
- [contexts(matching:completion:)](clsdatastore/contexts%28matching_completion_%29.md): Fetches all the contexts matching a predicate.

# CLSPredicateKeyPath (Objective-C)

**Framework:** ClassKit  
**Kind:** Type Alias  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The set of possible key paths you use to search for contexts.

## Declaration

```objectivec
typedef NSString * CLSPredicateKeyPath;
```

<a id="Discussion"></a>

## Discussion

Use these predicate key paths when constructing a predicate to send to the [contextsMatchingPredicate:completion:](clsdatastore/contexts%28matching_completion_%29.md) method.

## Topics

### Predicate key paths

- [CLSPredicateKeyPathDateCreated](clspredicatekeypath/datecreated.md): The date on which the context was created.
- [CLSPredicateKeyPathIdentifier](clspredicatekeypath/identifier.md): The context’s identifier.
- [CLSPredicateKeyPathParent](clspredicatekeypath/parent.md): The context’s direct ancestor in the context hierarchy.
- [CLSPredicateKeyPathTitle](clspredicatekeypath/title.md): The human readable name of the context.
- [CLSPredicateKeyPathTopic](clspredicatekeypath/topic.md): The context’s topic.
- [CLSPredicateKeyPathUniversalLinkURL](clspredicatekeypath/universallinkurl.md): The context’s universal URL link.

## See Also

### Finding contexts that match criteria

- [contextsMatchingIdentifierPath:completion:](clsdatastore/contexts%28matchingidentifierpath_completion_%29.md): Fetches all the contexts along a given identifier path.
- [contextsMatchingPredicate:completion:](clsdatastore/contexts%28matching_completion_%29.md): Fetches all the contexts matching a predicate.
