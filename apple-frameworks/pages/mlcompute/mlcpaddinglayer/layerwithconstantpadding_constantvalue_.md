> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpaddinglayer/layerwithconstantpadding:constantvalue:](https://developer.apple.com/documentation/mlcompute/mlcpaddinglayer/layerwithconstantpadding:constantvalue:)

# layerWithConstantPadding:constantValue:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a padding layer with the constant padding sizes and constant valu you specify.

## Declaration

```objectivec
+ (instancetype) layerWithConstantPadding:(NSArray<NSNumber *> *) padding constantValue:(float) constantValue;
```

## Parameters

- `padding`: An array that contains the constant padding sizes.
- `constantValue`: The constant value to pad the source tensor.

<a id="return-value"></a>

## Return Value

A constant padding layer.

## See Also

### Creating Padding Layers

- [layerWithReflectionPadding:](layerwithreflectionpadding_.md): Deprecated. Creates a padding layer with the reflection padding sizes you specify.
- [layerWithSymmetricPadding:](layerwithsymmetricpadding_.md): Deprecated. Creates a padding layer with the symmetric padding sizes you specify.
- [layerWithZeroPadding:](layerwithzeropadding_.md): Deprecated. Creates a padding layer with the zero padding sizes you specify.
