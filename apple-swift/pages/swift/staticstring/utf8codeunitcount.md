> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticstring/utf8codeunitcount](https://developer.apple.com/documentation/swift/staticstring/utf8codeunitcount)

# utf8CodeUnitCount

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of UTF-8 code units (excluding the null terminator).

## Declaration

```swift
var utf8CodeUnitCount: Int { get }
```

<a id="discussion"></a>

## Discussion

> **Important**

> Accessing this property when `hasPointerRepresentation` is `false` triggers a runtime error.
