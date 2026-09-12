> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/copybytes(to:)-3mk27](https://developer.apple.com/documentation/foundation/dataprotocol/copybytes(to:)-3mk27)

# copyBytes(to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the bytes of data from the type into a raw memory buffer.

## Declaration

```swift
@discardableResult func copyBytes(to ptr: UnsafeMutableRawBufferPointer) -> Int
```

## Parameters

- `ptr`: A pointer to the raw memory buffer you want to copy the bytes into.

<a id="return-value"></a>

## Return Value

The number of bytes copied.

<a id="Discussion"></a>

## Discussion

The following example copies the bytes from the raw memory buffer into the provided raw memory buffer:

```swift
let source: [UInt8] = [0, 1, 2]
var dest: [UInt8] = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
dest.withUnsafeMutableBytes { destBufferPtr in
    let count = source.copyBytes(to: destBufferPtr)
    // count == 3
}
// dest = [0x00, 0x01, 0x02, 0xFF, 0xFF, 0xFF]

```

## See Also

### Copying Underlying Bytes

- [copyBytes(to:)](copybytes%28to_%29-52wps.md): Copies the bytes of data from the type into a typed memory buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29-6krsm.md): Copies the provided number of bytes from the start of the type into a typed memory buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29-29t5.md): Copies the provided number of bytes from the start of the type into a raw memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-1ol47.md): Copies a range of the bytes from the type into a typed memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-1y839.md): Copies a range of the bytes from the type into a raw memory buffer.
