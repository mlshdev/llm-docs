> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/lastrange(of:in:)-4enyx](https://developer.apple.com/documentation/foundation/dataprotocol/lastrange(of:in:)-4enyx)

# lastRange(of:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the last found range of the type’s data buffer.

## Declaration

```swift
func lastRange<D, R>(of data: D, in range: R) -> Range<Self.Index>? where D : DataProtocol, R : RangeExpression, Self.Index == R.Bound
```

## Parameters

- `data`: The data sequence to find.
- `range`: A range to limit the scope of the search.

<a id="return-value"></a>

## Return Value

The range, if found, of the last match of the provided data sequence.
