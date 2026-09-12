> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/startindex](https://developer.apple.com/documentation/swift/set/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The starting position for iterating members of the set.

## Declaration

```swift
var startIndex: Set<Element>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the set is empty, `startIndex` is equal to `endIndex`.
