> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsoptimizerclippingfunction/init(_:)

# init(\_:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new instance with the specified raw value.

## Declaration

```swift
init(_ rawValue: UInt32)
```

## See Also

### Clipping Functions

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](rawvalue.md): The corresponding value of the raw type.
- [BNNSOptimizerClippingNone](../bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](../bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByNorm](../bnnsoptimizerclippingbynorm.md): A constant that specifes clipping to a maximum Euclidean norm.
- [BNNSOptimizerClippingByGlobalNorm](../bnnsoptimizerclippingbyglobalnorm.md): A constant that specifes clipping to a maximum global Euclidean norm.
