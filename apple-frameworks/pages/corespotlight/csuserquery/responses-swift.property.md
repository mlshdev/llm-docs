> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/responses-swift.property](https://developer.apple.com/documentation/corespotlight/csuserquery/responses-swift.property)

# responses

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The matching results and suggestions for the current query string.

## Declaration

```swift
var responses: CSUserQuery.Responses { get }
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Getting the value of this property starts the query and begins the delivery of responses. Typically, you get this property as part of a `for..in` loop to iterate over the responses, as shown in the following example:

```swift
var results: [CSUserQuery.Item] = []
var suggestions: [CSUserQuery.Suggestion] = []
let query = CSUserQuery(userQueryString: searchText, userQueryContext: queryContext)

for try await element in query.responses {
    switch(element) {
        case .item(let item):
            self.results.append(item)
            break
        case .suggestion(let suggestion):
            self.suggestions.append(suggestion)
            break
        @unknown default:
            break
    }
}
```

## See Also

### Executing the query automatically

- [suggestions](suggestions-swift.property.md): An asynchronous sequence of suggested completions for the current query text.
- [CSUserQuery.Responses](responses-swift.struct.md): An asynchronous sequence that contains the results and suggestions for a query string.
- [CSUserQuery.Suggestions](suggestions-swift.struct.md): An asynchronous sequence that contains the suggested completions for a search string.
- [CSUserQuery.Item](item.md): A search result that the query returns in a response.
- [CSUserQuery.Suggestion](suggestion.md): A suggested text completion for a query’s search term.
