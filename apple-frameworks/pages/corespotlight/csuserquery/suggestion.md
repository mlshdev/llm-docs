> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/suggestion](https://developer.apple.com/documentation/corespotlight/csuserquery/suggestion)

# CSUserQuery.Suggestion

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A suggested text completion for a query’s search term.

## Declaration

```swift
struct Suggestion
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

When executing its query, a [CSUserQuery](../csuserquery.md) object returns both results and suggestions for text completions of the current term. Use the [suggestion](suggestion/suggestion.md) property of this structure to get one of the suggestions to display in your app’s interface and use in a new query.

## Topics

### Instance Properties

- [suggestion](suggestion/suggestion.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Executing the query automatically

- [responses](responses-swift.property.md): The matching results and suggestions for the current query string.
- [suggestions](suggestions-swift.property.md): An asynchronous sequence of suggested completions for the current query text.
- [CSUserQuery.Responses](responses-swift.struct.md): An asynchronous sequence that contains the results and suggestions for a query string.
- [CSUserQuery.Suggestions](suggestions-swift.struct.md): An asynchronous sequence that contains the suggested completions for a search string.
- [CSUserQuery.Item](item.md): A search result that the query returns in a response.
