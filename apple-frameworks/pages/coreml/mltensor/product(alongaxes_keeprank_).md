> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/product(alongaxes:keeprank:)](https://developer.apple.com/documentation/coreml/mltensor/product(alongaxes:keeprank:))

# product(alongAxes:keepRank:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the product along the specified axes.

## Declaration

```swift
func product(alongAxes axes: Int..., keepRank: Bool = false) -> MLTensor
```

## Parameters

- `axes`: The axes to reduce.
- `keepRank`: A Boolean indicating whether to keep the reduced axes or not. The default value is `false`.

<a id="return-value"></a>

## Return Value

The reduced tensor.

<a id="discussion"></a>

## Discussion

```swift
let x = MLTensor(shape: [3, 2], scalars: [2, 3, 4, 5, 6, 7], scalarType: Float.self)
let y = x.product(alongAxes: 0)
y.shape // is [1, 2]
await y.shapedArray(of: Float.self) // is [48.0 105.0]
```

## See Also

### Accessing the product along an axes

- [product(keepRank:)](product%28keeprank_%29.md): Returns the product along all axes.
