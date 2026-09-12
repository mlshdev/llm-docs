> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/activationfunction/sigmoid](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/activationfunction/sigmoid)

# GaussianSplatResource.ActivationFunction.sigmoid

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Applies a sigmoid function to each value.

## Declaration

```swift
case sigmoid
```

<a id="discussion"></a>

## Discussion

Choose this when your values are unbounded logits that map to the 0 to 1 range, as opacity often is. The framework computes *f(x) = 1 / (1 + e^(-x))*.
