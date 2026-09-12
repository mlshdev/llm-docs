> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/copybytes(to:from:)-1y839](https://developer.apple.com/documentation/foundation/dataprotocol/copybytes(to:from:)-1y839)

# copyBytes(to:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of the bytes from the type into a raw memory buffer.

## Declaration

```swift
@discardableResult func copyBytes<R>(to: UnsafeMutableRawBufferPointer, from: R) -> Int where R : RangeExpression, Self.Index == R.Bound
```

## Parameters

- `to`: A pointer to the raw memory buffer you want to copy the bytes into.
- `from`: The range of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied.

<a id="Discussion"></a>

## Discussion

The following example copies the source bytes that the provided range identifies into the beginning of the specified raw memory buffer:

```swift
let source: [UInt8] = [0, 1, 2]
var dest: [UInt8] = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
_ = dest.withUnsafeMutableBytes { destBufferPtr in
    source.copyBytes(to: destBufferPtr, from: 1...2)
}
// dest = [0x01, 0x02, 0xFF, 0xFF, 0xFF, 0xFF]
```

## Default Implementations

### DataProtocol Implementations

- [copyBytes(to:from:)](copybytes%28to_from_%29-2u470.md): Copies a range of the bytes from the type into a raw memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-44inx.md): Conforms when `Self` conforms to `ContiguousBytes`. Copies a range of the bytes from the type into a typed memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-9bgoo.md): Copies a range of the bytes from the type into a typed memory buffer.

## See Also

### Copying Underlying Bytes

- [copyBytes(to:)](copybytes%28to_%29-52wps.md): Copies the bytes of data from the type into a typed memory buffer.
- [copyBytes(to:)](copybytes%28to_%29-3mk27.md): Copies the bytes of data from the type into a raw memory buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29-6krsm.md): Copies the provided number of bytes from the start of the type into a typed memory buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29-29t5.md): Copies the provided number of bytes from the start of the type into a raw memory buffer.
- [copyBytes(to:from:)](copybytes%28to_from_%29-1ol47.md): Copies a range of the bytes from the type into a typed memory buffer.
