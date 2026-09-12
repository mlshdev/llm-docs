> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafebufferpointer/endindex](https://developer.apple.com/documentation/swift/unsafebufferpointer/endindex)

# endIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The “past the end” position—that is, the position one greater than the last valid subscript argument.

## Declaration

```swift
var endIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

The `endIndex` property of an `UnsafeBufferPointer` instance is always identical to `count`.
