> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/inlinearray/startindex

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
