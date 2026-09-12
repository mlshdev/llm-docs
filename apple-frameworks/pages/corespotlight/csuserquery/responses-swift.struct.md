> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/responses-swift.struct](https://developer.apple.com/documentation/corespotlight/csuserquery/responses-swift.struct)

# CSUserQuery.Responses

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An asynchronous sequence that contains the results and suggestions for a query string.

## Declaration

```swift
struct Responses
```

<a id="Discussion"></a>

## Discussion

A `CSUserQuery/Responses-struct` structure contains the results of a query. Fetch this structure from the [responses](responses-swift.property.md) property of your query object to execute the query automatically and begin the delivery of the results. Each element that this structure returns to you is either a search result or a suggested completion of the current search text. Check the element type and handle it accordingly.

For more information about how to use this structure, see the [responses](responses-swift.property.md) property.

## Topics

### Getting the response type

- [CSUserQuery.Responses.Response](responses-swift.struct/response.md)

### Iterating over the responses

- [CSUserQuery.Responses.Iterator](responses-swift.struct/iterator.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Executing the query automatically

- [responses](responses-swift.property.md): The matching results and suggestions for the current query string.
- [suggestions](suggestions-swift.property.md): An asynchronous sequence of suggested completions for the current query text.
- [CSUserQuery.Suggestions](suggestions-swift.struct.md): An asynchronous sequence that contains the suggested completions for a search string.
- [CSUserQuery.Item](item.md): A search result that the query returns in a response.
- [CSUserQuery.Suggestion](suggestion.md): A suggested text completion for a query’s search term.
