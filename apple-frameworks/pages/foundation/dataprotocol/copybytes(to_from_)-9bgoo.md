> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/copybytes(to:from:)-9bgoo](https://developer.apple.com/documentation/foundation/dataprotocol/copybytes(to:from:)-9bgoo)

# copyBytes(to:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of the bytes from the type into a typed memory buffer.

## Declaration

```swift
@discardableResult func copyBytes<DestinationType, R>(to ptr: UnsafeMutableBufferPointer<DestinationType>, from range: R) -> Int where R : RangeExpression, Self.Index == R.Bound
```

## Parameters

- `ptr`: A typed pointer to the buffer you want to copy the bytes into.
- `range`: The range of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied.
