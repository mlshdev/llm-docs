> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf8view/endindex](https://developer.apple.com/documentation/swift/string/utf8view/endindex)

# endIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The “past the end” position—that is, the position one greater than the last valid subscript argument.

## Declaration

```swift
var endIndex: String.UTF8View.Index { get }
```

<a id="discussion"></a>

## Discussion

In an empty UTF-8 view, `endIndex` is equal to `startIndex`.
