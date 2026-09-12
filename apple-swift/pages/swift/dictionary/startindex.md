> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/startindex](https://developer.apple.com/documentation/swift/dictionary/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of the first element in a nonempty dictionary.

## Declaration

```swift
var startIndex: Dictionary<Key, Value>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.

> **Complexity**

> Amortized O(1) if the dictionary does not wrap a bridged `NSDictionary`. If the dictionary wraps a bridged `NSDictionary`, the performance is unspecified.
