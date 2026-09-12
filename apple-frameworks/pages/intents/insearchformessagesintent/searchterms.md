> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/searchterms](https://developer.apple.com/documentation/intents/insearchformessagesintent/searchterms)

# searchTerms (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The terms to look for in the messages.

## Declaration

```swift
var searchTerms: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only messages whose contents contain one of the specified strings. Use the operator in the [searchTermsOperator](searchtermsoperator.md) property to determine whether to search for messages containing all, some, or none of the specified terms.

## See Also

### Getting the Search Criteria

- [searchTermsOperator](searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [dateTimeRange](datetimerange.md): The range of dates in which to search for messages.
- [attributes](attributes.md): The attributes that must be present on a message to yield a match.

# searchTerms (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The terms to look for in the messages.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * searchTerms;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * searchTerms;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only messages whose contents contain one of the specified strings. Use the operator in the [searchTermsOperator](searchtermsoperator.md) property to determine whether to search for messages containing all, some, or none of the specified terms.

## See Also

### Getting the Search Criteria

- [searchTermsOperator](searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [dateTimeRange](datetimerange.md): The range of dates in which to search for messages.
- [attributes](attributes.md): The attributes that must be present on a message to yield a match.
