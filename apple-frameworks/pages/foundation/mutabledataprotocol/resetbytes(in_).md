> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/mutabledataprotocol/resetbytes(in:)](https://developer.apple.com/documentation/foundation/mutabledataprotocol/resetbytes(in:))

# resetBytes(in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the contents of the data buffer with zeros for the provided range.

## Declaration

```swift
mutating func resetBytes<R>(in range: R) where R : RangeExpression, Self.Index == R.Bound
```

## Parameters

- `range`: The range of bytes to replace with zeros.

<a id="Discussion"></a>

## Discussion

The following example sets the bytes to zero for the bytes identified by the provided range:

```swift
var dest: [UInt8] = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
dest.resetBytes(in: 1...3)
// dest = [0xFF, 0x00, 0x00, 0x00, 0xFF, 0xFF]
```

## Default Implementations

### MutableDataProtocol Implementations

- [resetBytes(in:)](resetbytes%28in_%29-9ix6g.md): Replaces the contents of the data buffer with zeros for the provided range.
