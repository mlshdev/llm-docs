> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyregexoutput/element/range](https://developer.apple.com/documentation/swift/anyregexoutput/element/range)

# range

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The range over which a value was captured, if there was a capture.

## Declaration

```swift
var range: Range<String.Index>? { get }
```

<a id="discussion"></a>

## Discussion

If nothing was captured, `range` is `nil`.
