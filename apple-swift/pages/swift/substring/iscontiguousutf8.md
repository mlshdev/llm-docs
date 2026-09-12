> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/iscontiguousutf8](https://developer.apple.com/documentation/swift/substring/iscontiguousutf8)

# isContiguousUTF8

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether this string’s storage contains validly-encoded UTF-8 contents in contiguous memory.

## Declaration

```swift
var isContiguousUTF8: Bool { get }
```

<a id="discussion"></a>

## Discussion

Contiguous strings always operate in O(1) time for withUTF8, always give a result for Substring.UTF8View.withContiguousStorageIfAvailable, and always return a non-nil value from `Substring._utf8Span` and `Substring.UTF8View._span`. Contiguous strings also benefit from fast-paths and better optimizations.
