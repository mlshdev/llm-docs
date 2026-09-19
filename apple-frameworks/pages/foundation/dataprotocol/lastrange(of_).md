> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/dataprotocol/lastrange(of:)

# lastRange(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the last found range of the type’s data buffer.

## Declaration

```swift
func lastRange<D>(of data: D) -> Range<Self.Index>? where D : DataProtocol
```

## Parameters

- `data`: The data sequence to find.

<a id="return-value"></a>

## Return Value

The range, if found, of the last match of the provided data sequence.

<a id="Discussion"></a>

## Discussion

An example of searching a data buffer for the last match:

```swift
let data: [UInt8] = [0, 1, 2, 3, 0, 1, 2, 3]
let pattern: [UInt8] = [2, 3]

let match = data.lastRange(of: pattern)
// match == 6..<8

```

## See Also

### Searching Within Data

- [firstRange(of:)](firstrange%28of_%29.md): Returns the first found range of the type’s data buffer.
- [firstRange(of:in:)](firstrange%28of_in_%29.md): Returns the first found range of the type’s data buffer.
- [lastRange(of:in:)](lastrange%28of_in_%29.md): Returns the last found range of the type’s data buffer.
