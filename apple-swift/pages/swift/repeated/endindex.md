> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/repeated/endindex](https://developer.apple.com/documentation/swift/repeated/endindex)

# endIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.

## Declaration

```swift
var endIndex: Repeated<Element>.Index { get }
```

<a id="discussion"></a>

## Discussion

In a `Repeated` collection, `endIndex` is always equal to `count`. If the collection is empty, `endIndex` is equal to `startIndex`.
