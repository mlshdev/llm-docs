> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/inlinearray/startindex](https://developer.apple.com/documentation/swift/inlinearray/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The position of the first element in a nonempty array.

## Declaration

```swift
var startIndex: InlineArray<count, Element>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the array is empty, `startIndex` is equal to `endIndex`.

> **Complexity**

> O(1)
