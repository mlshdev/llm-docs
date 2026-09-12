> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctransposelayer/init(dimensions:)](https://developer.apple.com/documentation/mlcompute/mlctransposelayer/init(dimensions:))

# init(dimensions:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a transpose layer with the dimensions you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(dimensions: [Int])
```

## Parameters

- `dimensions`: An array that represents the ordering of dimensions.

<a id="Discussion"></a>

## Discussion

The `dimensions` array contains an input axis source for each output axis. In other words, the `n`th element in the dimensions array specifies the input axis source for the `n`th axis in the output. You can’t transpose the batch dimension, which is typically axis 0.
