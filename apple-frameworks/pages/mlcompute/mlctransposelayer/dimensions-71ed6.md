> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctransposelayer/dimensions-71ed6](https://developer.apple.com/documentation/mlcompute/mlctransposelayer/dimensions-71ed6)

# dimensions

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

An array that contains an input axis source for each output axis, which represents the ordering of dimensions.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var dimensions: [Int] { get }
```

<a id="Discussion"></a>

## Discussion

Permutes the dimensions according to `dimensions`. The returned tensor’s dimension `i` corresponds to `dimensions[i]`.
