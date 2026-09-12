> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/firstrange(of:in:)-52f13](https://developer.apple.com/documentation/foundation/dataprotocol/firstrange(of:in:)-52f13)

# firstRange(of:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first found range of the type’s data buffer.

## Declaration

```swift
func firstRange<D, R>(of data: D, in range: R) -> Range<Self.Index>? where D : DataProtocol, R : RangeExpression, Self.Index == R.Bound
```

## Parameters

- `data`: The data sequence to find.
- `range`: A range to limit the scope of the search.

<a id="return-value"></a>

## Return Value

The range, if found, of the first match of the provided data sequence.
