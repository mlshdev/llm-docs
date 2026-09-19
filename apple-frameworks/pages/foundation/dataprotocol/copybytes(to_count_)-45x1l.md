> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/dataprotocol/copybytes(to:count:)-45x1l

# copyBytes(to:count:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the provided number of bytes from the start of the type into a raw memory buffer.

## Declaration

```swift
@discardableResult func copyBytes(to ptr: UnsafeMutableRawBufferPointer, count: Int) -> Int
```

## Parameters

- `ptr`: A pointer to the raw memory buffer you want to copy the bytes into.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied.
