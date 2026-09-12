> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/results-swift.property](https://developer.apple.com/documentation/corespotlight/cssearchquery/results-swift.property)

# results

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The results that match the current query string.

## Declaration

```swift
var results: CSSearchQuery.Results { get }
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Getting the value of this property starts the query automatically and begins the delivery of results. Typically, you get this property as part of a `for..in` loop and iterate over the responses, as shown in the following example:

```swift
var results: [String] = []
let query = CSSearchQuery(queryString: searchText, queryContext: queryContext)

for try await element in query.results {
    if let title = element.item.attributeSet.title {
    results.append(title)
    }
}
```

## See Also

### Executing the query automatically

- [CSSearchQuery.Results](results-swift.struct.md): An asynchronous sequence that contains the results that match the query string.
