> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/attributes](https://developer.apple.com/documentation/intents/insearchformessagesintent/attributes)

# attributes (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The attributes that must be present on a message to yield a match.

## Declaration

```swift
var attributes: INMessageAttributeOptions { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the scope of the search to messages with the specified attributes.

## See Also

### Getting the Search Criteria

- [searchTerms](searchterms.md): The terms to look for in the messages.
- [searchTermsOperator](searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [dateTimeRange](datetimerange.md): The range of dates in which to search for messages.

# attributes (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The attributes that must be present on a message to yield a match.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INMessageAttributeOptions attributes;
```

```objectivec
@property (atomic, assign, readonly) INMessageAttributeOptions attributes;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the scope of the search to messages with the specified attributes.

## See Also

### Getting the Search Criteria

- [searchTerms](searchterms.md): The terms to look for in the messages.
- [searchTermsOperator](searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [dateTimeRange](datetimerange.md): The range of dates in which to search for messages.
