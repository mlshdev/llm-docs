> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazyprefixwhilesequence/startindex](https://developer.apple.com/documentation/swift/lazyprefixwhilesequence/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of the first element in a nonempty collection.

## Declaration

```swift
var startIndex: LazyPrefixWhileSequence<Base>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.
