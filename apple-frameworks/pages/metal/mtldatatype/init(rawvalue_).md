> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldatatype/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtldatatype/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a data type instance from a raw integer value.

## Declaration

```swift
init?(rawValue: UInt)
```

## Parameters

- `rawValue`: The underlying integer value that represents a data type.

<a id="discussion"></a>

## Discussion

Use the [MTLDataType](../mtldatatype.md) structure’s type properties, such as [MTLDataType.int](int.md), instead of this initializer.
