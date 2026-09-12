> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/storebytes(of:tobyteoffset:as:)-1afju](https://developer.apple.com/documentation/swift/mutablerawspan/storebytes(of:tobyteoffset:as:)-1afju)

# storeBytes(of:toByteOffset:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Stores the given value’s bytes to the specified offset into the span’s memory.

## Declaration

```swift
mutating func storeBytes<T>(of value: T, toByteOffset offset: Int, as type: T.Type) where T : BitwiseCopyable, T : ConvertibleToBytes
```

## Parameters

- `value`: The value to store as raw bytes.
- `offset`: The offset in bytes into the span’s memory at which to begin writing the bytes from the value.
- `type`: The type of the instance to store.

<a id="discussion"></a>

## Discussion

The range of bytes required to store a value of type `T` starting at byte offset `offset` must be completely within the span.
