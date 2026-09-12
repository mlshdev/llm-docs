> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcslicelayer/slicelayerwithstart:end:stride:](https://developer.apple.com/documentation/mlcompute/mlcslicelayer/slicelayerwithstart:end:stride:)

# sliceLayerWithStart:end:stride:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a slice layer with the specified start, end, and stride.

## Declaration

```objectivec
+ (instancetype) sliceLayerWithStart:(NSArray<NSNumber *> *) start end:(NSArray<NSNumber *> *) end stride:(NSArray<NSNumber *> *) stride;
```

## Parameters

- `start`: The start vector.
- `end`: The end vector.
- `stride`: The stride vector.

<a id="return-value"></a>

## Return Value

A slice layer.
