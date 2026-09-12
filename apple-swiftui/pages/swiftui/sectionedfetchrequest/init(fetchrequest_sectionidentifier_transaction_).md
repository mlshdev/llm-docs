> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchrequest/init(fetchrequest:sectionidentifier:transaction:)](https://developer.apple.com/documentation/swiftui/sectionedfetchrequest/init(fetchrequest:sectionidentifier:transaction:))

# init(fetchRequest:sectionIdentifier:transaction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a fully configured sectioned fetch request that uses the specified transaction when updating results.

## Declaration

```swift
@MainActor @preconcurrency init(fetchRequest: NSFetchRequest<Result>, sectionIdentifier: KeyPath<Result, SectionIdentifier>, transaction: Transaction)
```

## Parameters

- `fetchRequest`: An [NSFetchRequest](https://developer.apple.com/documentation/coredata/nsfetchrequest) instance that describes the search criteria for retrieving data from the persistent store.
- `sectionIdentifier`: A key path that SwiftUI applies to the `Result` type to get an object’s section identifier.
- `transaction`: A transaction to use for user interface changes that result from changes to the fetched results.

<a id="discussion"></a>

## Discussion

Use this initializer if you need a fetch request with updates that affect the user interface based on a [Transaction](../transaction.md). Otherwise, use [init(fetchRequest:sectionIdentifier:animation:)](init%28fetchrequest_sectionidentifier_animation_%29.md).

## See Also

### Creating a fully configured fetch request

- [init(fetchRequest:sectionIdentifier:animation:)](init%28fetchrequest_sectionidentifier_animation_%29.md): Conforms when `SectionIdentifier` conforms to `Hashable` and `Result` conforms to `NSFetchRequestResult`. Creates a fully configured sectioned fetch request that uses the specified animation when updating results.
