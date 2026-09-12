> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/firstrange(of:in:)](https://developer.apple.com/documentation/foundation/dataprotocol/firstrange(of:in:))

# firstRange(of:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first found range of the type’s data buffer.

## Declaration

```swift
func firstRange<D, R>(of: D, in: R) -> Range<Self.Index>? where D : DataProtocol, R : RangeExpression, Self.Index == R.Bound
```

## Parameters

- `of`: The data sequence to find.
- `in`: A range to limit the scope of the search.

<a id="return-value"></a>

## Return Value

The range, if found, of the first match of the provided data sequence.

<a id="Discussion"></a>

## Discussion

An example of searching a constrained range within a data buffer for the first match:

```swift
let data: [UInt8] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let pattern: [UInt8] = [2, 3, 4]

let possibleMatch = data.firstRange(of: pattern, in: 5...9)
// possibleMatch == nil

let match = data.firstRange(of: pattern, in: 2...9)
// match == 2..<5
```

## Default Implementations

### DataProtocol Implementations

- [firstRange(of:in:)](firstrange%28of_in_%29-52f13.md): Returns the first found range of the type’s data buffer.

## See Also

### Searching Within Data

- [firstRange(of:)](firstrange%28of_%29.md): Returns the first found range of the type’s data buffer.
- [lastRange(of:)](lastrange%28of_%29.md): Returns the last found range of the type’s data buffer.
- [lastRange(of:in:)](lastrange%28of_in_%29.md): Returns the last found range of the type’s data buffer.
