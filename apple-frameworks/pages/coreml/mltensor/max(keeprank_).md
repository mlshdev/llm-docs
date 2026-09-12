> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/max(keeprank:)](https://developer.apple.com/documentation/coreml/mltensor/max(keeprank:))

# max(keepRank:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the maximum value in the array.

## Declaration

```swift
func max(keepRank: Bool = false) -> MLTensor
```

## Parameters

- `keepRank`: A Boolean indicating whether to keep the reduced axes or not. The default value is `false`.

<a id="return-value"></a>

## Return Value

The reduced tensor.

<a id="discussion"></a>

## Discussion

```swift
let x = MLTensor(shape: [3, 2], scalars: [2, 3, 4, 5, 6, 7], scalarType: Float.self)
let y = x.max()
y.shape // is []
await y.shapedArray(of: Float.self) // is [7.0]
```

## See Also

### Accessing the minimum, maximum and mean

- [min(alongAxes:keepRank:)](min%28alongaxes_keeprank_%29.md): Returns the minimum values along the specified axes.
- [min(keepRank:)](min%28keeprank_%29.md): Returns the minimum value in the array.
- [max(alongAxes:keepRank:)](max%28alongaxes_keeprank_%29.md): Returns the maximum values along the specified axes.
- [mean(alongAxes:keepRank:)](mean%28alongaxes_keeprank_%29.md): Returns the mean along the specified axes.
- [mean(keepRank:)](mean%28keeprank_%29.md): Returns the mean along all axes.
