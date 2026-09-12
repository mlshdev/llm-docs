> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchrequest/wrappedvalue](https://developer.apple.com/documentation/swiftui/fetchrequest/wrappedvalue)

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The fetched results of the fetch request.

## Declaration

```swift
@MainActor @preconcurrency var wrappedValue: FetchedResults<Result> { get }
```

<a id="discussion"></a>

## Discussion

SwiftUI returns the value associated with this property when you use [FetchRequest](../fetchrequest.md) as a property wrapper, and then access the wrapped property by name. For example, consider the following `quakes` property declaration that fetches a `Quake` type that the [Loading and displaying a large data feed](../loading-and-displaying-a-large-data-feed.md) sample code project defines:

```swift
@FetchRequest(fetchRequest: request)
private var quakes: FetchedResults<Quake>
```

You access the request’s `wrappedValue`, which contains a [FetchedResults](../fetchedresults.md) instance, by referring to the `quakes` property by name:

```swift
Text("Found \(quakes.count) earthquakes")
```

If you need to separate the request and the result entities, you can declare `quakes` in two steps by using the request’s `wrappedValue` to obtain the results:

```swift
var fetchRequest = FetchRequest<Quake>(fetchRequest: request)
var quakes: FetchedResults<Quake> { fetchRequest.wrappedValue }
```

The `wrappedValue` property returns an empty array when there are no fetched results — for example, because no entities satisfy the predicate, or because the data store is empty.

## See Also

### Getting the fetched results

- [update()](update%28%29.md): Conforms when `Result` conforms to `NSFetchRequestResult`. Updates the fetched results.
