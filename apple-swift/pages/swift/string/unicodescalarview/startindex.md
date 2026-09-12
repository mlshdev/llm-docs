> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/unicodescalarview/startindex](https://developer.apple.com/documentation/swift/string/unicodescalarview/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of the first Unicode scalar value if the string is nonempty.

## Declaration

```swift
var startIndex: String.UnicodeScalarView.Index { get }
```

<a id="discussion"></a>

## Discussion

If the string is empty, `startIndex` is equal to `endIndex`.
