> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivation/init(function:alpha:beta:)](https://developer.apple.com/documentation/accelerate/bnnsactivation/init(function:alpha:beta:))

# init(function:alpha:beta:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

Returns a new common activation function parameters structure that uses the specified function, alpha, and beta.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(function: BNNSActivationFunction, alpha: Float = .nan, beta: Float = .nan)
```

## Parameters

- `function`: The activation function to use.
- `alpha`: The parameter for the alpha of the activation function.
- `beta`: The parameter for the beta of the activation function.

<a id="return-value"></a>

## Return Value

A new common activation function parameters structure.

## See Also

### Initializers

- [init()](init%28%29.md): Returns a new common activation function parameters structure.
- [init(function:alpha:beta:iscale:ioffset:ishift:iscale_per_channel:ioffset_per_channel:ishift_per_channel:)](init%28function_alpha_beta_iscale_ioffset_ishift_iscale_per_channel_ioffset_per_channel_ishift_per_channel_%29.md): Returns a new common activation function parameters structure that uses the specified function, alpha, beta, integer scale, offset, and shift.
