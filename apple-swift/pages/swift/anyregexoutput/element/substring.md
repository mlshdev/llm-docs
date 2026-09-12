> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyregexoutput/element/substring](https://developer.apple.com/documentation/swift/anyregexoutput/element/substring)

# substring

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The slice of the input which was captured, if there was a capture.

## Declaration

```swift
var substring: Substring? { get }
```

<a id="discussion"></a>

## Discussion

If nothing was captured, `substring` is `nil`.
