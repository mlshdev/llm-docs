> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexformat/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtlvertexformat/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a vertex format from a raw integer value.

## Declaration

```swift
init?(rawValue: UInt)
```

## Parameters

- `rawValue`: The underlying integer value that represents a vertex format.

<a id="discussion"></a>

## Discussion

Use the [MTLVertexFormat](../mtlvertexformat.md) structure’s type properties, such as [MTLVertexFormat.uchar4Normalized_bgra](uchar4normalized_bgra.md), instead of this initializer.
