> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayernormalizationlayer/normalizedshape-8ujvv](https://developer.apple.com/documentation/mlcompute/mlclayernormalizationlayer/normalizedshape-8ujvv)

# normalizedShape

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

The shape of the axes where normalization occurs.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var normalizedShape: [Int] { get }
```

<a id="Discussion"></a>

## Discussion

Define the shape of the axes in the dimensions `[w]`, `[h, w]`, or `[c, h, w]`, where `w` is width, `h` is height, and `c` is channel count.

## See Also

### Inspecting Layer Normalization Layers

- [beta](beta.md): Deprecated. The beta tensor.
- [gamma](gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.
