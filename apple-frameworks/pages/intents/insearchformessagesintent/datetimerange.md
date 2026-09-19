> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insearchformessagesintent/datetimerange

# dateTimeRange (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The range of dates in which to search for messages.

## Declaration

```swift
@NSCopying var dateTimeRange: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the scope of the search to sent or received messages within the specified dates.

## See Also

### Getting the Search Criteria

- [searchTerms](searchterms.md): The terms to look for in the messages.
- [searchTermsOperator](searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [attributes](attributes.md): The attributes that must be present on a message to yield a match.

# dateTimeRange (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The range of dates in which to search for messages.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * dateTimeRange;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * dateTimeRange;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the scope of the search to sent or received messages within the specified dates.

## See Also

### Getting the Search Criteria

- [searchTerms](searchterms.md): The terms to look for in the messages.
- [searchTermsOperator](searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [attributes](attributes.md): The attributes that must be present on a message to yield a match.
