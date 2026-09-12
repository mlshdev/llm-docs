> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticstring/utf8start](https://developer.apple.com/documentation/swift/staticstring/utf8start)

# utf8Start

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to a null-terminated sequence of UTF-8 code units.

## Declaration

```swift
var utf8Start: UnsafePointer<UInt8> { get }
```

<a id="discussion"></a>

## Discussion

> **Important**

> Accessing this property when `hasPointerRepresentation` is `false` triggers a runtime error.
