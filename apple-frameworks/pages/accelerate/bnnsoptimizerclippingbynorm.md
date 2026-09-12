> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizerclippingbynorm](https://developer.apple.com/documentation/accelerate/bnnsoptimizerclippingbynorm)

# BNNSOptimizerClippingByNorm (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that specifes clipping to a maximum Euclidean norm.

## Declaration

```swift
var BNNSOptimizerClippingByNorm: BNNSOptimizerClippingFunction { get }
```

## See Also

### Related Documentation

- [BNNSClipByNorm(\_:\_:\_:\_:)](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.

### Clipping Functions

- [init(\_:)](bnnsoptimizerclippingfunction/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsoptimizerclippingfunction/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsoptimizerclippingfunction/rawvalue.md): The corresponding value of the raw type.
- [BNNSOptimizerClippingNone](bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByGlobalNorm](bnnsoptimizerclippingbyglobalnorm.md): A constant that specifes clipping to a maximum global Euclidean norm.

# BNNSOptimizerClippingByNorm (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that specifes clipping to a maximum Euclidean norm.

## Declaration

```objectivec
BNNSOptimizerClippingByNorm
```

## See Also

### Related Documentation

- [BNNSClipByNorm](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.

### Clipping Functions

- [BNNSOptimizerClippingNone](bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByGlobalNorm](bnnsoptimizerclippingbyglobalnorm.md): A constant that specifes clipping to a maximum global Euclidean norm.
