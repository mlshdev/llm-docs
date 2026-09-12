> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/characteriterator/currentcodeunitoffset](https://developer.apple.com/documentation/swift/utf8span/characteriterator/currentcodeunitoffset)

# currentCodeUnitOffset

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The byte offset of the start of the next `Character`. This is always scalar-aligned. It is always `Character`-aligned relative to the last call to `reset` (or the start of the span if not called).

## Declaration

```swift
var currentCodeUnitOffset: Int { get }
```
