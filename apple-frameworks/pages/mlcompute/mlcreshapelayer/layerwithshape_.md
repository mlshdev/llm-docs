> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mlcompute/mlcreshapelayer/layerwithshape:

# layerWithShape:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a reshape layer with the shape you specify.

## Declaration

```objectivec
+ (instancetype) layerWithShape:(NSArray<NSNumber *> *) shape;
```

## Parameters

- `shape`: An array that contains the size of each dimension.

<a id="return-value"></a>

## Return Value

A new [MLCReshapeLayer](../mlcreshapelayer.md) instance.
