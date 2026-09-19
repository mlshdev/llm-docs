> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/ndarray/rangeexpression/relative(to:)

# relative(to:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns Range for the dimension.

## Declaration

```swift
func relative(to dimension: Range<Int>) -> Range<Int>
```

## Parameters

- `dimension`: The dimension of the axis on which the range expression is used.

<a id="return-value"></a>

## Return Value

The range of the selected dimension.

<a id="discussion"></a>

## Discussion

For example, when the range expression specifies `1...` on the axis with dimension 3, the resultant Range is `1 ..< 3`.
