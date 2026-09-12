> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf8view/startindex](https://developer.apple.com/documentation/swift/string/utf8view/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of the first code unit if the UTF-8 view is nonempty.

## Declaration

```swift
var startIndex: String.UTF8View.Index { get }
```

<a id="discussion"></a>

## Discussion

If the UTF-8 view is empty, `startIndex` is equal to `endIndex`.
