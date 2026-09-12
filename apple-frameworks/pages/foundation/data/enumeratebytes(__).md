> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/enumeratebytes(_:)](https://developer.apple.com/documentation/foundation/data/enumeratebytes(_:))

# enumerateBytes(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 5.0)

Enumerates the contents of the data’s buffer.

## Declaration

```swift
func enumerateBytes(_ block: (UnsafeBufferPointer<UInt8>, Data.Index, inout Bool) -> Void)
```

## Parameters

- `block`: The closure to invoke for each region of data. You may stop the enumeration by setting the `stop` parameter to `true`.

<a id="Discussion"></a>

## Discussion

In some cases, (for example, a [Data](../data.md) backed by a `dispatch_data_t`, the bytes may be stored discontiguously. In those cases, this function invokes the closure for each contiguous region of bytes.

## See Also

### Iterating Over Bytes

- [makeIterator()](makeiterator%28%29.md): Returns an iterator over the contents of the data.
- [Data.Iterator](iterator.md): An iterator that operates over the contents of data.
