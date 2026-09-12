> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/storebytes(repeating:count:as:)-6822y](https://developer.apple.com/documentation/swift/mutablerawspan/storebytes(repeating:count:as:)-6822y)

# storeBytes(repeating:count:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Stores the given value’s bytes repeatedly into this span’s memory.

## Declaration

```swift
mutating func storeBytes<T>(repeating repeatedValue: T, count: Int, as type: T.Type) where T : BitwiseCopyable
```

## Parameters

- `repeatedValue`: The value to store as raw bytes.
- `count`: The number of copies of `repeatedValue` to store into this span.
- `type`: The type of the instance to store repeatedly.

<a id="discussion"></a>

## Discussion

There must be at least `count * MemoryLayout<T>.stride` bytes available in the span.
