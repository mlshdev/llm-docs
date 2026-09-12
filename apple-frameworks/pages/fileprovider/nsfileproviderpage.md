> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderpage](https://developer.apple.com/documentation/fileprovider/nsfileproviderpage)

# NSFileProviderPage (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A synchronization point that represents the next batch of items to be returned by an enumerator.

## Declaration

```swift
struct NSFileProviderPage
```

<a id="Discussion"></a>

## Discussion

Your file provider should populate the page with the information it needs to partition items into batches and to systematically return a batch of data at a time. For example, a simple page could contain the index of the next item to return. A request to enumerate items from that page would then return a batch of items starting at the specified index.

## Topics

### Page Constants

- [initialPageSortedByName](nsfileproviderpage/initialpagesortedbyname.md): The initial batch of items when sorted by name.
- [initialPageSortedByDate](nsfileproviderpage/initialpagesortedbydate.md): The initial batch of items when sorted by date.

### Initializers

- [init(\_:)](nsfileproviderpage/init%28__%29.md): Creates a new page structure from the given raw value.
- [init(rawValue:)](nsfileproviderpage/init%28rawvalue_%29.md): Creates a new page structure from the given raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing search results

- [enumerateSearchResults(for:startingAt:)](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md): Enumerates search results starting from the specified page, in response to a call from the framework.
- [NSFileProviderSearchEnumerationObserver](nsfileprovidersearchenumerationobserver.md): A protocol that defines a type that receives enumerations of search results from your extension.

# NSFileProviderPage (Objective-C)

**Framework:** File Provider  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A synchronization point that represents the next batch of items to be returned by an enumerator.

## Declaration

```objectivec
typedef NSData * NSFileProviderPage;
```

<a id="Discussion"></a>

## Discussion

Your file provider should populate the page with the information it needs to partition items into batches and to systematically return a batch of data at a time. For example, a simple page could contain the index of the next item to return. A request to enumerate items from that page would then return a batch of items starting at the specified index.

## Topics

### Page Constants

- [NSFileProviderInitialPageSortedByName](nsfileproviderpage/initialpagesortedbyname.md): The initial batch of items when sorted by name.
- [NSFileProviderInitialPageSortedByDate](nsfileproviderpage/initialpagesortedbydate.md): The initial batch of items when sorted by date.

## See Also

### Providing search results

- [enumerateSearchResultsForObserver:startingAtPage:](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md): Enumerates search results starting from the specified page, in response to a call from the framework.
- [NSFileProviderSearchEnumerationObserver](nsfileprovidersearchenumerationobserver.md): A protocol that defines a type that receives enumerations of search results from your extension.
