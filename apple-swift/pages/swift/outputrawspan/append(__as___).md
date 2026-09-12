> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan/append(_:as:_:)](https://developer.apple.com/documentation/swift/outputrawspan/append(_:as:_:))

# append(\_:as:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Appends the given value’s bytes to this span’s bytes.

## Declaration

```swift
mutating func append<T>(_ value: T, as type: T.Type, _ byteOrder: ByteOrder) where T : BitwiseCopyable, T : ConvertibleToBytes, T : FixedWidthInteger
```

## Parameters

- `value`: The value to store as raw bytes.
- `type`: The type of the instance to store.
- `byteOrder`: The order in which the bytes will be encoded to the span.

<a id="discussion"></a>

## Discussion

There must be at least `MemoryLayout<T>.size` bytes available in the span.
