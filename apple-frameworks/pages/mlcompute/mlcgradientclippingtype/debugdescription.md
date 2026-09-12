> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgradientclippingtype/debugdescription](https://developer.apple.com/documentation/mlcompute/mlcgradientclippingtype/debugdescription)

# debugDescription (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+

A textual description of the gradient clipping type, suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

## See Also

### Gradient Clipping Types

- [MLCGradientClippingType.byValue](byvalue.md): Deprecated. An option that clips by value.
- [MLCGradientClippingType.byNorm](bynorm.md): Deprecated. An option that clips by norm.
- [MLCGradientClippingType.byGlobalNorm](byglobalnorm.md): Deprecated. An option that clips by global norm.

# MLCGradientClippingTypeDebugDescription (Objective-C)

**Framework:** ML Compute  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+

A textual description of the gradient clipping type, suitable for debugging.

## Declaration

```objectivec
NSString *MLCGradientClippingTypeDebugDescription(MLCGradientClippingType gradientClippingType);
```

## See Also

### Gradient Clipping Types

- [MLCGradientClippingTypeByValue](byvalue.md): Deprecated. An option that clips by value.
- [MLCGradientClippingTypeByNorm](bynorm.md): Deprecated. An option that clips by norm.
- [MLCGradientClippingTypeByGlobalNorm](byglobalnorm.md): Deprecated. An option that clips by global norm.
