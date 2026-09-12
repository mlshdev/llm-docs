> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectiondifference/startindex](https://developer.apple.com/documentation/swift/collectiondifference/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The position of the first element in a nonempty collection.

## Declaration

```swift
var startIndex: CollectionDifference<ChangeElement>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.
