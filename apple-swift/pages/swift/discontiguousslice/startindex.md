> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/startindex](https://developer.apple.com/documentation/swift/discontiguousslice/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The position of the first element in a nonempty collection.

## Declaration

```swift
var startIndex: DiscontiguousSlice<Base>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.
