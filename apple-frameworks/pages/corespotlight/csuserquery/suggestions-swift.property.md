> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/suggestions-swift.property](https://developer.apple.com/documentation/corespotlight/csuserquery/suggestions-swift.property)

# suggestions

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An asynchronous sequence of suggested completions for the current query text.

## Declaration

```swift
var suggestions: CSUserQuery.Suggestions { get }
```

<a id="Discussion"></a>

## Discussion

Getting the value of this property starts the query and begins the delivery of suggestions. Typically, you get this property as part of a `for..in` loop to iterate over the suggestions and display them in your interface.

## See Also

### Executing the query automatically

- [responses](responses-swift.property.md): The matching results and suggestions for the current query string.
- [CSUserQuery.Responses](responses-swift.struct.md): An asynchronous sequence that contains the results and suggestions for a query string.
- [CSUserQuery.Suggestions](suggestions-swift.struct.md): An asynchronous sequence that contains the suggested completions for a search string.
- [CSUserQuery.Item](item.md): A search result that the query returns in a response.
- [CSUserQuery.Suggestion](suggestion.md): A suggested text completion for a query’s search term.
