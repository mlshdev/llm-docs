> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/copybytes(to:count:)-9wm8s](https://developer.apple.com/documentation/foundation/dataprotocol/copybytes(to:count:)-9wm8s)

# copyBytes(to:count:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the provided number of bytes from the start of the type into a typed memory buffer.

## Declaration

```swift
@discardableResult func copyBytes<DestinationType>(to ptr: UnsafeMutableBufferPointer<DestinationType>, count: Int) -> Int
```

## Parameters

- `ptr`: A typed pointer to the buffer you want to copy the bytes into.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied.
