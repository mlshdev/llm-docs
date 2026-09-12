> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivation/init(function:alpha:beta:iscale:ioffset:ishift:iscale_per_channel:ioffset_per_channel:ishift_per_channel:)](https://developer.apple.com/documentation/accelerate/bnnsactivation/init(function:alpha:beta:iscale:ioffset:ishift:iscale_per_channel:ioffset_per_channel:ishift_per_channel:))

# init(function:alpha:beta:iscale:ioffset:ishift:iscale_per_channel:ioffset_per_channel:ishift_per_channel:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new common activation function parameters structure that uses the specified function, alpha, beta, integer scale, offset, and shift.

## Declaration

```swift
init(function: BNNSActivationFunction, alpha: Float, beta: Float, iscale: Int32, ioffset: Int32, ishift: Int32, iscale_per_channel: UnsafePointer<Int32>?, ioffset_per_channel: UnsafePointer<Int32>?, ishift_per_channel: UnsafePointer<Int32>?)
```

## Parameters

- `function`: The activation function.
- `alpha`: The parameter for the alpha of the activation function.
- `beta`: The parameter for the beta of the activation function.
- `iscale`: Scale for integer functions.
- `ioffset`: Offset for integer functions.
- `ishift`: Shift for integer functions.
- `iscale_per_channel`: Scale per channel for integer functions.
- `ioffset_per_channel`: Offset per channel for integer functions.
- `ishift_per_channel`: Shift per channel for integer functions.

<a id="return-value"></a>

## Return Value

A new common activation function parameters structure.

## See Also

### Initializers

- [init()](init%28%29.md): Returns a new common activation function parameters structure.
- [init(function:alpha:beta:)](init%28function_alpha_beta_%29.md): Deprecated. Returns a new common activation function parameters structure that uses the specified function, alpha, and beta.
