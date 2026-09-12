> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/searchtermsoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/searchtermsoperator)

# searchTermsOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the set of terms in the search criteria.

## Declaration

```swift
var searchTermsOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the terms listed in the [searchTerms](searchterms.md) property.

## See Also

### Getting the Search Criteria

- [searchTerms](searchterms.md): The terms to look for in the messages.
- [dateTimeRange](datetimerange.md): The range of dates in which to search for messages.
- [attributes](attributes.md): The attributes that must be present on a message to yield a match.

# searchTermsOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the set of terms in the search criteria.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator searchTermsOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator searchTermsOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the terms listed in the [searchTerms](searchterms.md) property.

## See Also

### Getting the Search Criteria

- [searchTerms](searchterms.md): The terms to look for in the messages.
- [dateTimeRange](datetimerange.md): The range of dates in which to search for messages.
- [attributes](attributes.md): The attributes that must be present on a message to yield a match.
