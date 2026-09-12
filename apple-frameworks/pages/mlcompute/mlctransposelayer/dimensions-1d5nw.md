> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctransposelayer/dimensions-1d5nw](https://developer.apple.com/documentation/mlcompute/mlctransposelayer/dimensions-1d5nw)

# dimensions

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains an input axis source for each output axis, which represents the ordering of dimensions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSNumber *> * dimensions;
```

<a id="Discussion"></a>

## Discussion

Permutes the dimensions according to `dimensions`. The returned tensor’s dimension `i` corresponds to `dimensions[i]`.
