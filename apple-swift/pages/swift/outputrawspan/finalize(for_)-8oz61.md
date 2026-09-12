> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan/finalize(for:)-8oz61](https://developer.apple.com/documentation/swift/outputrawspan/finalize(for:)-8oz61)

# finalize(for:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Consume the output span and return the number of initialized bytes.

## Declaration

```swift
consuming func finalize(for buffer: UnsafeMutableRawBufferPointer) -> Int
```

## Parameters

- `buffer`: The buffer we expect the `OutputRawSpan` to reference. This must be the same region of memory passed to the `OutputRawSpan` initializer.

<a id="return-value"></a>

## Return Value

The number of initialized bytes in the same buffer, as tracked by the consumed `OutputRawSpan` instance.

<a id="discussion"></a>

## Discussion

This method should be invoked in the scope where the `OutputRawSpan` was created, when it is time to commit the contents of the updated buffer back into the construct being initialized.

The context that created the output span is expected to remember what memory region the span is addressing. This consuming method expects to receive a copy of the same buffer pointer as a (loose) proof of ownership.
