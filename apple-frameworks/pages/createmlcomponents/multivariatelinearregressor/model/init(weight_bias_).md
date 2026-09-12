> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/model/init(weight:bias:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/model/init(weight:bias:))

# init(weight:bias:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a multivariate linear regressor.

## Declaration

```swift
init(weight: MLShapedArray<Scalar>, bias: MLShapedArray<Scalar>?)
```

## Parameters

- `weight`: A shaped array of linear weights.
- `bias`: A one-dimensional shaped array of biases.
