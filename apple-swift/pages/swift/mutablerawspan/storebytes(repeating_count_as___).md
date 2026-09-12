> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/storebytes(repeating:count:as:_:)](https://developer.apple.com/documentation/swift/mutablerawspan/storebytes(repeating:count:as:_:))

# storeBytes(repeating:count:as:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Stores the given value’s bytes repeatedly into this span’s memory.

## Declaration

```swift
mutating func storeBytes<T>(repeating repeatedValue: T, count: Int, as type: T.Type, _ byteOrder: ByteOrder) where T : BitwiseCopyable, T : ConvertibleToBytes, T : FixedWidthInteger
```

## Parameters

- `repeatedValue`: The value to store as raw bytes.
- `count`: The number of copies of `repeatedValue` to store into this span.
- `type`: The type of the instance to store repeatedly.
- `byteOrder`: The order in which the bytes will be encoded to the span.

<a id="discussion"></a>

## Discussion

There must be at least `count * MemoryLayout<T>.stride` bytes available in the span.
