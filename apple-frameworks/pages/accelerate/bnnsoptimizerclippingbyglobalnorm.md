> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizerclippingbyglobalnorm](https://developer.apple.com/documentation/accelerate/bnnsoptimizerclippingbyglobalnorm)

# BNNSOptimizerClippingByGlobalNorm (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that specifes clipping to a maximum global Euclidean norm.

## Declaration

```swift
var BNNSOptimizerClippingByGlobalNorm: BNNSOptimizerClippingFunction { get }
```

## See Also

### Related Documentation

- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.

### Clipping Functions

- [init(\_:)](bnnsoptimizerclippingfunction/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsoptimizerclippingfunction/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsoptimizerclippingfunction/rawvalue.md): The corresponding value of the raw type.
- [BNNSOptimizerClippingNone](bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByNorm](bnnsoptimizerclippingbynorm.md): A constant that specifes clipping to a maximum Euclidean norm.

# BNNSOptimizerClippingByGlobalNorm (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that specifes clipping to a maximum global Euclidean norm.

## Declaration

```objectivec
BNNSOptimizerClippingByGlobalNorm
```

## See Also

### Related Documentation

- [BNNSClipByGlobalNorm](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.

### Clipping Functions

- [BNNSOptimizerClippingNone](bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByNorm](bnnsoptimizerclippingbynorm.md): A constant that specifes clipping to a maximum Euclidean norm.
