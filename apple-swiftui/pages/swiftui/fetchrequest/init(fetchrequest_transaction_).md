> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchrequest/init(fetchrequest:transaction:)](https://developer.apple.com/documentation/swiftui/fetchrequest/init(fetchrequest:transaction:))

# init(fetchRequest:transaction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a fully configured fetch request that uses the specified transaction when updating results.

## Declaration

```swift
@MainActor @preconcurrency init(fetchRequest: NSFetchRequest<Result>, transaction: Transaction)
```

## Parameters

- `fetchRequest`: An [NSFetchRequest](https://developer.apple.com/documentation/coredata/nsfetchrequest) instance that describes the search criteria for retrieving data from the persistent store.
- `transaction`: A transaction to use for user interface changes that result from changes to the fetched results.

<a id="discussion"></a>

## Discussion

Use this initializer if you need a fetch request with updates that affect the user interface based on a [Transaction](../transaction.md). Otherwise, use [init(fetchRequest:animation:)](init%28fetchrequest_animation_%29.md).

## See Also

### Creating a fully configured fetch request

- [init(fetchRequest:animation:)](init%28fetchrequest_animation_%29.md): Conforms when `Result` conforms to `NSFetchRequestResult`. Creates a fully configured fetch request that uses the specified animation when updating results.
