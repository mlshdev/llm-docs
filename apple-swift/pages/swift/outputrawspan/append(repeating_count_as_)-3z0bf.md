> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan/append(repeating:count:as:)-3z0bf](https://developer.apple.com/documentation/swift/outputrawspan/append(repeating:count:as:)-3z0bf)

# append(repeating:count:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Appends the given value’s bytes repeatedly to this span’s bytes.

## Declaration

```swift
mutating func append<T>(repeating repeatedValue: T, count: Int, as type: T.Type) where T : BitwiseCopyable, T : ConvertibleToBytes
```

## Parameters

- `repeatedValue`: The value to store as raw bytes.
- `count`: The number of copies of `repeatedValue` to append to this span.
- `type`: The type of the instance to store repeatedly.

<a id="discussion"></a>

## Discussion

There must be at least `count * MemoryLayout<T>.stride` bytes available in the span.
