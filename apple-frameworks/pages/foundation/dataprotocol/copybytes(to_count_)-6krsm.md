> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/copybytes(to:count:)-6krsm](https://developer.apple.com/documentation/foundation/dataprotocol/copybytes(to:count:)-6krsm)

# copyBytes(to:count:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the provided number of bytes from the start of the type into  a typed memory buffer.

## Declaration

```swift
@discardableResult func copyBytes<DestinationType>(to: UnsafeMutableBufferPointer<DestinationType>, count: Int) -> Int
```

## Parameters

- `to`: A typed pointer to the buffer you want to copy the bytes into.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied.

<a id="Discussion"></a>

## Discussion

The following example copies the number of bytes that `count` identified from the beginning of the raw memory buffer into the provided typed memory buffer:

```swift
let source: [UInt8] = [0, 1, 2]
var dest: [UInt8] = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
dest.withUnsafeMutableBufferPointer { typedMemBuffer in
    let count = source.copyBytes(to: typedMemBuffer, count: 1)
    // count == 1
}
// dest = [0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]

```

## Default Implementations

### DataProtocol Implementations

- [copyBytes(to:count:)](copybytes%28to_count_%29-45x1l.md): Copies the provided number of bytes from the start of the type into a raw memory buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29-9wm8s.md): Copies the provided number of bytes from the start of the type into a typed memory buffer.

## See Also

### Copying Underlying Bytes

- [copyBytes(to:)](copybytes%28to_%29-52wps.md): Copies the bytes of data from the type into a typed memory buffer.
- [copyBytes(to:)](copybytes%28to_%29-3mk27.md): Copies the bytes of data from the type into a raw memory buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29-29t5.md): Copies the provided number of bytes from the start of the type into a raw memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-1ol47.md): Copies a range of the bytes from the type into a typed memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-1y839.md): Copies a range of the bytes from the type into a raw memory buffer.
