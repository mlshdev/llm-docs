> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctransposelayer/layerwithdimensions:](https://developer.apple.com/documentation/mlcompute/mlctransposelayer/layerwithdimensions:)

# layerWithDimensions:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a transpose layer with the dimensions you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDimensions:(NSArray<NSNumber *> *) dimensions;
```

## Parameters

- `dimensions`: An array that represents the ordering of dimensions.

<a id="return-value"></a>

## Return Value

A transpose layer.

<a id="Discussion"></a>

## Discussion

The `dimensions` array contains an input axis source for each output axis. In other words, the `n`th element in the dimensions array specifies the input axis source for the `n`th axis in the output. You can’t transpose the batch dimension, which is typically axis 0.
